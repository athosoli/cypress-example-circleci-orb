/// <reference types="Cypress" />
const faker = require('faker')


context('Testar o Login PDV', () => {
beforeEach(() => {
    
cy.visit('https://golerp-pdv.netlify.app/auth/login')
cy.wait(5000)
cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('athos@adsoft.com')
cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('4071')
cy.get('.MuiButtonBase-root').click()
cy.get('#filial-selecionada-select-outlined').click()

cy.contains('DEMONSTRAÇÃO').click({timeout: 10000})
cy.get('.MuiButton-label').click({timeout: 10000})
    
 
 })
 it.only('Cadastro de cliente', () => {
cy.wait(5000)

})
})