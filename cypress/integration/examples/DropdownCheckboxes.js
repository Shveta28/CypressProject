///<reference types="Cypress"/>
describe('dropdown and checkboxes',function(){

    it('My second test case', function(){
     //Section 6 starts
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
     //be is used for behaviour "and" is used for concatenation of assertion
     cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
     cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
     cy.get('input[type="checkbox"]').check(['option2','option3']);

     //Handling static dropdowns. Select is the tagname 
     cy.get('select').select('option2').should('have.value','option2');

     //Dynamic Dropdowns
     cy.get('#autocomplete').type('ind');

     //traverse from parent to child
     cy.get('.ui-menu-item div').each(($e1, index, $list) =>{
         if($e1.text()==='India')
         {
            $e1.click();
         }
     })

     cy.get('#autocomplete').should('have.value',"India");

    })
})