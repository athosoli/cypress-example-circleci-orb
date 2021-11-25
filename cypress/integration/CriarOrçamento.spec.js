
// const faker = require('faker')
import loc from '../support/locators'

context("GRUD - ORÇAMENTO", () => {
  before(() => {
    cy.visit(loc.ambiente.beta);
  });

  it("Login", () => {
    
    cy.get(loc.login.user).type(`${Cypress.env("usuario")}`); //variavel e locators
    cy.get(loc.login.password)
      .clear()
      .type(`${Cypress.env("senha")}`); //variavel e locators
    cy.get("[class=ng-scope]").should("contain", "ACESSAR");
    cy.contains("ACESSAR").click({ force: true });
    cy.wait(2000);

    //ESSA PARTE UTILIZA COM MULTI AMBIENTES DEMOSTRAÇÃO
  //  cy.contains("Selecionar...").click({ force: true });
  //  cy.contains("CONTROLE DE QUALIDADE AUTOMAÇÃO").click({ force: true });
  //  cy.contains("SELECIONAR FILIAL").click({ force: true });
    cy.wait(5000);
    cy.get("[class=ng-binding]").should("contain", "Inicio");
   

    //abrir a navigator bar
    // cy.get(loc.menu.navigator).click()//locators
    // cy.wait(500)
    // cy.get(loc.menu.fixar).click()//locators
  });


  it("CRIAR - ORÇAMENTO  ", () => {

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
     
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 
  
      //adicionar
     
      
     
  
    //adicionar
  
   
    
   
    cy.get(loc.faturamento.adicionar).click();
    cy.get(".breadcrumb > :nth-child(4) > .ng-binding").should("contain", "Cadastrar");
    cy.wait(500)

    //verificar clica em juridia e verifica razao
    cy.get('#fisOperacao > .ui-select-match > .form-control').click({ timeout: 10000 })
    cy.contains("5102").click({ timeout: 10000 })
    cy.get('#fatVendedor > .ui-select-match > .form-control').click({ timeout: 10000 })
    cy.contains("ATHOS").click({ timeout: 10000 })
    cy.get('#fatCondicaopagamento > .ui-select-match > .form-control').click({ timeout: 10000 })
    cy.contains("A VISTA").click({ timeout: 10000 })
    cy.get('#finMeiopagamento > .ui-select-match > .form-control').click({ timeout: 10000 })
    cy.contains("DINHEIRO").click({ timeout: 10000 })
    cy.get('.flex > :nth-child(1) > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("athos teste")
    cy.wait(5000)
    cy.get(".ui-select-highlight").click({ timeout: 10000 })
    cy.get('[ng-if="ctrl.modelo.intCliente"] > :nth-child(1) > .panel > .panel-heading').click({ timeout: 10000 })
    cy.contains('Adicionar endereço').click({ timeout: 20000 })
    cy.get('#entregaCep').type("45990292")
    cy.get('#entregaLogradouroNumero').type("541")
    cy.wait(1000)
    cy.get('#entregaComplemento').type("Sobrado")
    cy.wait(1000)
    cy.get('.layout-row > .md-raised > span.ng-scope').click({ timeout: 10000 })
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
   
    // // hora de exportar para pedido
    // cy.contains("ATHOS TESTE",{ matchCase: false }).dblclick({ timeout: 30000 })
    // cy.get('.md-menu > .md-raised').click() 
    // cy.contains("Exportar para Pedido").click({ timeout: 20000 })
    // cy.get('.layout-row > .md-raised').click({ timeout: 20000 })
    // cy.get('.swal2-confirm').click({ timeout: 20000 })
    // cy.wait(5000)
    // //agora para nota de saida.
    // cy.get('.md-menu > .md-raised').click({ timeout: 30000 })
    // cy.contains("Exportar para documento").click({ timeout: 20000 })
    // cy.get('.swal2-popup').should("contain", "Faturar pedido")
    // cy.get('.swal2-confirm').click({ timeout: 20000 })
    // cy.wait(5000)
    // cy.get('.swal2-confirm').should("contain", "faturado")
    // cy.get('.swal2-confirm').click({ timeout: 20000 })



    
  });
  it("CRIAR - ORÇAMENTO teste  2  ", () => {
   
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
   
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 
  
      //adicionar
      cy.wait(2000);

      cy.get(':nth-child(2) > .layout-row > :nth-child(1) > .md-raised > .fa').click()
      cy.wait(500)
    //adicionar
    cy.get(loc.faturamento.adicionar).click();
    cy.wait(500)
    cy.get(".breadcrumb > :nth-child(4) > .ng-binding").should("contain", "Cadastrar");
    cy.wait(500)
    //verificar clica em juridia e verifica razao
    cy.get('#fisOperacao > .ui-select-match > .form-control').click({ timeout: 10000 })
    cy.contains("5102").click({ timeout: 10000 })
    cy.get('#fatVendedor > .ui-select-match > .form-control').click({ timeout: 10000 })
    cy.contains("ATHOS").click({ timeout: 10000 })
    cy.get('#fatCondicaopagamento > .ui-select-match > .form-control').click({ timeout: 10000 })
    cy.contains("A VISTA").click({ timeout: 10000 })
    cy.get('#finMeiopagamento > .ui-select-match > .form-control').click({ timeout: 10000 })
    cy.contains("DINHEIRO").click({ timeout: 10000 })
    cy.get('.flex > :nth-child(1) > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("athos teste")
    cy.wait(5000)
    cy.get(".ui-select-highlight").click({ timeout: 10000 })
    cy.get('[ng-if="ctrl.modelo.intCliente"] > :nth-child(1) > .panel > .panel-heading').click({ timeout: 10000 })
    cy.contains('Adicionar endereço').click({ timeout: 20000 })
    cy.get('#entregaCep').type("45990292")
    cy.get('#entregaLogradouroNumero').type("541")
    cy.wait(1000)
    cy.get('#entregaComplemento').type("Sobrado")
    cy.wait(1000)
    cy.get('.layout-row > .md-raised > span.ng-scope').click({ timeout: 10000 })
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
   
    // // hora de exportar para pedido
    // cy.contains("ATHOS TESTE",{ matchCase: false }).dblclick({ timeout: 30000 })
    // cy.get('.md-menu > .md-raised').click() 
    // cy.contains("Exportar para Pedido").click({ timeout: 20000 })
    // cy.get('.layout-row > .md-raised').click({ timeout: 20000 })
    // cy.get('.swal2-confirm').click({ timeout: 20000 })
    // cy.wait(5000)
    // //agora para nota de saida.
    // cy.get('.md-menu > .md-raised').click({ timeout: 30000 })
    // cy.contains("Exportar para documento").click({ timeout: 20000 })
    // cy.get('.swal2-popup').should("contain", "Faturar pedido")
    // cy.get('.swal2-confirm').click({ timeout: 20000 })
    // cy.wait(5000)
    // cy.get('.swal2-confirm').should("contain", "faturado")
    // cy.get('.swal2-confirm').click({ timeout: 20000 })



    
  });
 

});
