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
    cy.wait(1000)
    cy.get(':nth-child(2) > .MuiListItemIcon-root > .MuiSvgIcon-root').click()
    cy.get('.MuiCollapse-wrapperInner > :nth-child(1)').click()
    cy.get('.MuiCardHeader-root').click()
    cy.get('.MuiButton-label').click()
    cy.get('#nome').type(faker.name.firstName(2))
    
    cy.get('#cpf').type('83715738987')
    cy.get('#dataNascimento').type('22021983')
    cy.get('.MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root').click()
    cy.contains('Funcionários').click()
    cy.contains('Salvar').click()
    cy.get('.jss16 > .MuiButtonBase-root').click()
    cy.get('.Mui-even > .MuiDataGrid-cell--withRenderer > div > [style="cursor: pointer; font-size: 18px;"]').click()
   
  
  cy.get('#nome').type(faker.name.firstName(2))
  cy.get('#cpf').type('83715738987')
    cy.get('#dataNascimento').type('23021983')
    //cy.get('.MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root').click()
    cy.contains('Funcionários').click()
    cy.contains('Salvar').click()
    








  

 

  
})
})