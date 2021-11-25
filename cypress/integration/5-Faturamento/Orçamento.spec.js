/// <reference types="Cypress" />
//const faker = require("faker");
import loc from "../../support/locators";

context("Testar o Login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(loc.login.user).type(`${Cypress.env("usuario")}`); //variavel e locators
    cy.get(loc.login.password).clear().type(`${Cypress.env("senha")}`); //variavel e locators
    cy.get("[class=ng-scope]").should("contain", "ACESSAR");
    cy.contains("ACESSAR").click({ force: true });
    cy.contains("Selecionar...").click({ force: true });
    cy.contains("DEMONSTRAÇÃO (TESTE)").click({ force: true });
    cy.get(".ui-select-match-text > .ng-binding").should("contain", "DEMONSTRAÇÃO (TESTE)");
    cy.contains("SELECIONAR FILIAL").click({force: true });
    cy.wait(10000)
    cy.get("[class=ng-binding]").should("contain", "Inicio")
   
  });
  // it("LOGIN", ()=>{
    
  //   cy.get(loc.login.user).type(`${Cypress.env("usuario")}`); //variavel e locators
  //   cy.get(loc.login.password).clear().type(`${Cypress.env("senha")}`); //variavel e locators
  //   cy.get("[class=ng-scope]").should("contain", "ACESSAR");
  //   cy.contains("ACESSAR").click({ force: true });
  //   cy.contains("Selecionar...").click({ force: true });
  //   cy.contains("DEMONSTRAÇÃO (TESTE)").click({ force: true });
  //   cy.get(".ui-select-match-text > .ng-binding").should("contain", "DEMONSTRAÇÃO (TESTE)");
  //   cy.contains("SELECIONAR FILIAL").click({force: true });
  //   cy.wait(1000);
  //   cy.get("[class=ng-binding]").should("contain", "Inicio");

  // })
  it("CRIAR - ORÇAMENTO EXPORTA PARA PEDIDO EXPORTA PARA DOC VENDA  ", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.faturamento.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.faturamento.orçamento).click({ force: true });
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
        cy.get(loc.faturamento.orçamento).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 
    //adicionar
    cy.get(loc.faturamento.adicionar).click({force: true });
    cy.get(".breadcrumb > :nth-child(4) > .ng-binding").should("contain", "Cadastrar");
    //verificar clica em juridia e verifica razao
    cy.get('#fisOperacao > .ui-select-match > .form-control').click({force: true })
    cy.contains("5102").click({force: true })
    cy.wait(200)
    cy.get('#fatVendedor > .ui-select-match > .form-control').click({force: true })
    cy.contains("ATHOS").click({force: true })
    cy.wait(200)
    cy.get('#fatCondicaopagamento > .ui-select-match > .form-control').click({force: true })
    cy.contains("A VISTA").click({force: true })
    cy.wait(200)
    cy.get('#finMeiopagamento > .ui-select-match > .form-control').click({force: true })
    cy.contains("DINHEIRO").click({force: true })
    cy.wait(200)
    cy.get('.flex > :nth-child(1) > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("athos teste")
    cy.wait(5000)
    cy.get(".ui-select-highlight").click({force: true })
    cy.get('div[ng-if="ctrl.modelo.clienteNome != null"] > :nth-child(1) > .panel > .panel-heading').click({force: true })
    cy.contains('Adicionar endereço').click({ timeout: 20000 })
    cy.get('#entregaCep').type("45990292")
    cy.get('#entregaLogradouroNumero').type("541")
    cy.wait(1000)
    cy.get('#entregaComplemento').type("Sobrado")
    cy.wait(1000)
    cy.get('.layout-row > .md-raised > span.ng-scope').click({force: true })
       // cy.get('.layout-column > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').click()
    cy.get('.layout-column > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("skol em lata")
    cy.contains("SKOL EM LATA").click()

    cy.get('#itemQuantidade').clear().type("2")
   // cy.contains("DEPOSITO INTERNO").click()
  
    cy.get('.md-group > .flex').click({ timeout: 20000 })
    cy.get(':nth-child(3) > :nth-child(1) > .panel > .panel-body').should("contain", "SKOL")
   
    cy.get('.col-md-24 > .pull-right > .md-raised > span.ng-scope').click({ timeout: 20000 })
    cy.get('[ng-click="ctrl.salvarCadastro()"]').click({ timeout: 30000 })
    cy.get(loc.menu.aviso).should('contain', 'sucesso')
    cy.get('.toast-title').click({ timeout: 30000 })
    cy.wait(5000)
   
    // hora de exportar para pedido
    cy.contains("ATHOS TESTE",{ matchCase: false }).dblclick({ timeout: 30000 })
    cy.get('.md-menu > .md-raised').click() 
    cy.contains("Exportar para Pedido").click({ timeout: 20000 })
    cy.get('.layout-row > .md-raised').click({ timeout: 20000 })
    cy.get('.swal2-confirm').click({ timeout: 20000 })
    cy.wait(5000)
    //agora para nota de saida.
    cy.get('.md-menu > .md-raised').click({ timeout: 30000 })
    cy.contains("Exportar para documento").click({ timeout: 20000 })
    cy.get('.swal2-popup').should("contain", "Faturar pedido")
    cy.get('.swal2-confirm').click({ timeout: 20000 })
    cy.wait(5000)
    cy.get('.swal2-confirm').should("contain", "faturado")
    cy.get('.swal2-confirm').click({ timeout: 20000 })



    
  });



});
