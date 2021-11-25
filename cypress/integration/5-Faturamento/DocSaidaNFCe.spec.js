/// <reference types="Cypress" />
//const faker = require('faker')
import loc from '../../support/locators'

context("Testar o Login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(loc.login.user).type(`${Cypress.env("usuario")}`); //variavel e locators
    cy.get(loc.login.password).clear().type(`${Cypress.env("senha")}`); //variavel e locators
    cy.get("[class=ng-scope]").should("contain", "ACESSAR");
    cy.contains("ACESSAR").click({ force: true });
    cy.contains("Selecionar...").click({ force: true });
    cy.contains("DEMONSTRAÇÃO").click({ force: true });
    cy.get(".ui-select-match-text > .ng-binding").should("contain", "DEMONSTRAÇÃO (TESTE)");
    cy.contains("SELECIONAR FILIAL").click({force: true });
    cy.wait(10000)
    cy.get("[class=ng-binding]").should("contain", "Inicio")
   
  });
 
  it('Cadastro de cliente', () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.faturamento.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.faturamento.documentoSaida).click({ force: true });
      cy.wait(5000);
     // cy.get(loc.menu.caminho).should("contain", "");
      cy.wait(500);
      //Fechar navigator bar
      cy.get(loc.menu.fixar).click({ force: true });
      cy.wait(2000);
      } else {
   
        cy.get(loc.menu.navigator).click({ force: true }); //locators
        cy.wait(500);
        cy.get(loc.menu.fixar).click({ force: true }); //locators
        cy.wait(500);
        //seleciona cliente no menu
        cy.get(loc.faturamento.icone).click({ force: true });
        cy.wait(1000);
        cy.get(loc.faturamento.documentoSaida).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 
    //adicionar
    cy.get(loc.faturamento.adicionar).click({timeout: 10000})
   
    cy.get('#fisOperacao > .ui-select-match > .form-control').click()
    cy.get('#ui-select-choices-row-20-9 > .ui-select-choices-row-inner > .text-truncate').click()
    cy.wait(1000)
    cy.get('.col-md-24 > .row > .col-md-14 > .layout-row > .flex > :nth-child(1) > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type('alex alves pereira dos santos')
    cy.get('.md-list-item-text > .layout-column').click()
    cy.wait(1000)
    
    cy.get('#fatCondicaopagamento > .ui-select-match > .form-control').type('vista')
    cy.get('#ui-select-choices-row-22-0 > .ui-select-choices-row-inner').click()
    cy.wait(1000)
    cy.get('#finMeiopagamentoParcelas > .ui-select-match > .form-control').type('dinheiro')
    cy.get('.ui-select-choices-row-inner > .text-truncate').click()
    cy.wait(1000)
   
    cy.get(':nth-child(2) > .col-md-14 > .layout-row > .layout-column > :nth-child(1) > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type('engradado')
    cy.get('#ui-select-choices-row-25-0 > .select2-result-label').click()
    cy.wait(1000)
    cy.get('#itemValorUnitario').type('10000')
    cy.get('[ng-click="ctrl.vendeItem()"] > span.ng-scope').click()
    cy.wait(1000)
    cy.contains('Avançar').click({timeout: 10000})
    cy.get('[ng-click="ctrl.salvarCadastro()"]').click()
    //cy.get('.md-toolbar-tools > h2').should('parcelas')
    cy.get('.layout-row > .md-raised > span.ng-scope').click()
    cy.wait(1000)
    cy.get('.md-menu > .md-raised > :nth-child(1)').click()
    cy.wait(1000)
    cy.get('._md > md-menu-item.ng-scope > .md-button').click({timeout: 10000})











  })
  
})