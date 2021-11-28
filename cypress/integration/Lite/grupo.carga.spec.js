/// <reference types="Cypress" />
const faker = require('faker')


context('Testar o Login Lite', () => {
// beforeEach(() => {
    
// cy.visit('http://app-siaf-lite.adsoft.com.br/login')

 it.only('Verificar Descriçao no menu', () => {
 
    cy.visit('http://app-siaf-lite.adsoft.com.br/')
    cy.get('.MuiPaper-root').should('contain', 'Esqueci')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('teste')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Lite123')
    cy.get('.MuiButton-label').dblclick()
    cy.wait(2000)
    cy.get('h1').should('contain', 'Dashboard')
    cy.get('.jss16').should('contain', 'Início') 
   
  //  cy.get(':nth-child(2) > .MuiListItemIcon-root > .MuiSvgIcon-root').click()
      cy.get(':nth-child(3) > .MuiListItemIcon-root > .MuiSvgIcon-root').click()

    cy.get('.MuiCollapse-wrapperInner > :nth-child(3)').click()
  //  cy.contain('Marca').click()
  
    for(let i = 0; i <= 10; i++){
    cy.get('.MuiButton-label').click()
    cy.get('#nome').clear().type(faker.name.firstName(2))
    cy.contains('Salvar').click()
    cy.wait(1000)
    
    
    }
    

  
})
})