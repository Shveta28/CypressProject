///<reference types="Cypress"/>
import HomePage from '../../plugins/pageObjects/HomePage'
import ProductPage from '../../plugins/pageObjects/ProductPage'
describe('Test Framework Project', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })

    it('Section 9-14', function () {
        //objects
        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit(Cypress.env('url'));
        homePage.getEditBox().type(this.data.name)
        homePage.getgender().select(this.data.gender)
        homePage.gettwowaydataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEnterpreneur().should('be.disabled');
        Cypress.config('defaultCommandTimeout',8000)
        homePage.getShopTab().click();

        //Iertaing through a list of array from the json file
        this.data.cartitems.forEach(function (element) {
            //Using the common method from commands file 
            cy.selectProduct(element)
        })

        productPage.checkoutButton().click();
        var sum=0
        //Implementing sum of products functionality
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>{
            const amount = $el.text()
            var res= amount.split(" ")
            res= res[1].trim()
            sum=Number(sum)+Number(res)
        }).then(function(){
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element){
            const amount= element.text()
            var res= amount.split(" ")
            var total= res[1].trim()
            expect(Number(total)).to.equal(sum)
        })
        cy.contains('Checkout').click();
        cy.get('#country').type('India');
        cy.get('.suggestions > ul > li > a').click();             
        cy.get('#checkbox2').click({force: true});
        cy.get('input[type="submit"]').click();
        cy.get('.alert').then(function(element){
            const actualText= element.text()
            if(actualText.includes("Success")){
              expect(actualText.includes("Success")).to.be.true
            }
        })
        })
    })