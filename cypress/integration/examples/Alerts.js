///<reference types="Cypress"/>
describe('Alerts and popup',function(){

    it('My Fourth test case Section 7', function(){
     //Section 7 starts
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //Cypress handles alert popup itself and click on ok
    cy.get('#alertbtn').click();
    cy.get('#confirmbtn').click();
    //window:alert to validate the text appear on the UI- but it will not be visible when the test runs
    cy.on('window:alert',(str)=>
    {
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge');
    })
    cy.on('window:confirm',(str)=>
   {
       //Mocha
       expect(str).to.equal('Hello , Are you sure you want to confirm?');
   })
    })
})