///<reference types="Cypress"/>
///<reference types="cypress-iframe"/> 

import 'cypress-iframe'
describe('Cypress Iframe',function(){

    it('My Third test case Section 8', function(){
        //Visit the url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Go to the frame id with frame loaded. Frame loaded method will come with cypress iframe plugin
        cy.frameLoaded('#courses-iframe');

        cy.iframe().find("a[href*='mentorship']").eq(0).click();

    })
})
