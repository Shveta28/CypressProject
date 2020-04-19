///<reference types="Cypress"/>
describe('Test Framework Project', function(){

   //runs once before every test run
   //resolve the promise
   //This is how you get the data from the fixture folder.
   //example.json has data in key value pair
    before(function(){
     cy.fixture('example').then(function(data)
     {
       this.data=data;
     })
    })

    it('Section 9-14', function(){

        cy.visit("https://rahulshettyacademy.com/angularpractice/");

        //input[name='name'] exists twice. so use nth child
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
        cy.get('select').select(this.data.gender);
        //Validate that two way binding populates the same name
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name);
        //Validate that the input name has min length of 2
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2');
        //Check the employemnet status is disabled
        cy.get('#inlineRadio3').should('be.disabled');
        cy.get(':nth-child(2) > .nav-link').click();
        //Iertaing through a list of array from the json file
        this.data.cartitems.forEach(function(element){
          //Using the common method from commands file 
          cy.selectProduct(element)
        })


    })
})