class HomePage{

    getEditBox(){
       return cy.get('input[name="name"]:nth-child(2)')
    }

    gettwowaydataBinding(){
       return cy.get(':nth-child(4) > .ng-untouched')
    }

    getgender(){
      return cy.get('select')
    }
    getEnterpreneur(){
      return cy.get('#inlineRadio3')
    }
    getShopTab(){
      return cy.get(':nth-child(2) > .nav-link')
    }
}
//This will be available to all classes
export default HomePage;