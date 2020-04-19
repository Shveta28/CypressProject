///<reference types="Cypress"/>
describe('My First Test Suite', function(){

    it('My First Test Case', function(){
        //Section 1-5
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        //Assertion coming from chai library to check the length of the product
        cy.get('.product:visible').should('have.length',4);
        //alias so that you do not end up writing the html dom everytime.
        cy.get('.products').as('productLocator')
        //Want to select second product out of 4 products
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();

        //Iterate through array using each
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
           
            const textVal=$e1.find('h4.product-name').text();
            if(textVal.includes('Cashews')){
                $e1.find('button').click();
            }
        })
        cy.get('.brand').should('have.text','GREENKART');
    })
    })