/// <reference types="Cypress" />
//const faker = require('faker')

import loc from "../../support/locators";

context("Contas a Receber", () => {
  beforeEach(() => {
    cy.visit(loc.ambiente.demo);
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
    cy.contains("Selecionar...").click({ force: true });
    cy.contains("CONTROLE DE QUALIDADE AUTOMAÇÃO").click({ force: true });
    cy.contains("SELECIONAR FILIAL").click({ force: true });
    cy.get("[class=ng-binding]").should("contain", "Inicio");
    cy.wait(3000);
    //abrir a navigator bar
    // cy.get(loc.menu.navigator).click()//locators
    // cy.wait(500)
    // cy.get(loc.menu.fixar).click()//locators
  });

  it("Criar e Ler - Serviços", () => {

    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.servico.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.servico.cadastraServico).click({ force: true });
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
        cy.get(loc.servico.icone).click({ force: true });
        cy.wait(1000);
        cy.get(loc.servico.cadastraServico).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 
    //adicionar titulo
    cy.get(loc.servico.adicionar).click({ force: true });
    cy.get(loc.menu.caminho2).should("contain", "Cadastro");
    //nome
    
    cy.get('.select2-choice').type("DESKTOP")
    cy.get(".select2-result-label > .ng-binding").click()
    cy.get('#descricao').type("FORMATAÇÃO DE DESKTOP");
    cy.get('#valor').type("20000");

    //SALVAR
    cy.get('#btn-salvar > span.ng-scope').click({force:true})

    cy.get(".toast-message").should("contain", "sucesso");
    cy.get(".toast > .md-icon-button > .ng-scope").click({ force: true });
    //botao atualiza
    cy.get(loc.menu.atualiza).click({ force: true });

    cy.contains("FORMATAÇÃO DE DESKTOP").dblclick({ force: true });
  
    cy.wait(1000)
    cy.get(loc.menu.caminho2).should('contain', 'Visualizar')
    cy.get(loc.integracao.Corpo).should('contain','FORMATAÇÃO DE DESKTOP')
    cy.get(loc.integracao.Corpo).should('contain','R$ 200,00')
    cy.get('.col-md-24 > .pull-right > .md-button').click({ force: true })
  });

  it("Editar - Grupo de Serviços", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.servico.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.servico.cadastraServico).click({ force: true });
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
        cy.get(loc.servico.icone).click({ force: true });
        cy.wait(1000);
        cy.get(loc.servico.cadastraServico).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 
    cy.get(loc.menu.caminho).should("contain", "Serviço");

    cy.contains("FORMATAÇÃO DE DESKTOP").click({ force: true });
    cy.get('#btn-editar > span.ng-scope').click({ force: true })


    cy.get('[ng-hide="$select.isEmpty()"]').type("NOTEBOOK")
    cy.get(".select2-result-label > .ng-binding").click()
    cy.get('#descricao').clear().type("LIMPEZA DE NOTEBOOK");
    cy.get('#valor').clear().type("40000");

     //SALVAR
    cy.get('#btn-salvar > span.ng-scope').click({force:true})

    cy.get(".toast-message").should("contain", "sucesso")
    cy.get(".toast > .md-icon-button > .ng-scope").click({ force: true })
    //botao atualiza
    cy.get(loc.menu.atualiza).click({ force: true })

    cy.contains("LIMPEZA DE NOTEBOOK").dblclick({ force: true })


    cy.wait(1000)
    cy.get(loc.menu.caminho2).should('contain', 'Visualizar')
    cy.get(loc.integracao.Corpo).should('contain','LIMPEZA DE NOTEBOOK')

    cy.get('.col-md-24 > .pull-right > .md-button > span.ng-scope').click({ force: true })


  });

  it("Exluir - Grupo de Serviços", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.servico.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.servico.cadastraServico).click({ force: true });
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
        cy.get(loc.servico.icone).click({ force: true });
        cy.wait(1000);
        cy.get(loc.servico.cadastraServico).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 

    cy.contains("LIMPEZA DE NOTEBOOK").click({ force: true })
    cy.get('#btn-excluir > span.ng-scope').click()
    cy.wait(1000)
    cy.get('.swal2-confirm').click()
    cy.get(loc.menu.aviso).should('contain', 'sucesso')
    cy.get(loc.menu.fechaaviso).click({timeout: 10000})

  });




});
