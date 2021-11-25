/// <reference types="Cypress" />
const faker = require('faker')


context('Testar o Login Lite', () => {
// beforeEach(() => {
    
// cy.visit('http://app-siaf-lite.adsoft.com.br/login')

// cy.wait(5000)
// cy.get('[href="/cadastrar"]').click()
// cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('teste')
// cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('1234')
// cy.get('.MuiButton-label').click()

    
 
//  })
 it.only('Cadastro de cliente', () => {
    cy.visit('http://app-siaf-lite.adsoft.com.br/login')

    cy.wait(5000)
    cy.get('[href="/cadastrar"]').click()
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('teste')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('1234')
    cy.get('.MuiButton-label').click()

})
})