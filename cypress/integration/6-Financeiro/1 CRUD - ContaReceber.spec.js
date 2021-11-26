<reference types="Cypress" />

var faker = require('faker-br');
let meuCpf = faker.br.cnpj();
import loc from '../../support/locators'

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
    cy.wait(5000);
    //abrir a navigator bar
    // cy.get(loc.menu.navigator).click()//locators
    // cy.wait(500)
    // cy.get(loc.menu.fixar).click()//locators
  });

  it("Criar de Titulo Contas a Receber", () => {

    if(loc.menu.navigator == false) {


    cy.get(loc.menu.navigator).click({ force: true }); //locators
    cy.wait(500);
    cy.get(loc.menu.fixar).click({ force: true }); //locators
    //seleciona cliente no menu
    cy.get(loc.financeiro.icone).click({ force: true });
    cy.get(loc.financeiro.contasReceber).click({ force: true });
    //Fechar navigator bar  { force: true }
    cy.get(loc.menu.fixar).click({ force: true });
    cy.get(loc.menu.caminho).should("contain", "Contas a receber");


    }else{
      cy.get(loc.financeiro.icone).click({ force: true });
      cy.get(loc.financeiro.contasReceber).click({ force: true });
      //Fechar navigator bar  { force: true }
      cy.get(loc.menu.fixar).click({ force: true });
      cy.get(loc.menu.caminho).should("contain", "Contas a receber"); 
    }


    cy.get(loc.financeiro.adicionar).click({ force: true });
    cy.get(loc.financeiro.caminho).should("contain", "Cadastrar");




 

    //nome
    cy.get(".select2-chosen.ng-binding").click({ force: true });
    cy.get(".search-container > .ui-select-search").type("athos de oliveira");
    cy.get(".md-list-item-text > .layout-column").click();
    //portador
    cy.get("#finConta > .ui-select-match > .form-control").type("SICOOB");
    cy.get(".ui-select-highlight").click();
    //forma de pagamento
    cy.get("#finMeiopagamento > .ui-select-match > .form-control").type(
      "Dinheiro"
    );
    cy.get(".ui-select-choices-row-inner > .text-truncate").click();
    cy.get(":nth-child(2) > .form-group > #nota").type("18664");
    //data
    cy.get("#tituloVencimento").type("30092021");
    //valor
    cy.get("#tituloValorBruto").type("50000");
    cy.get("#tituloValorAcrescimo").type("18");
    cy.get("#tituloValorDesconto").type("13");
    //plano financeiro
    cy.get(
      ".input-group > .ui-select-container > .ui-select-match > .form-control"
    ).type("VENDAS DE MERCADORIAS");
    cy.get(".ui-select-choices-row-inner > .ng-scope > .ng-binding").click();
    //centro de custo
    cy.get(
      '[datasource="ctrl.modelo.rateios[0].rateios[0]"] > .form-group > .ui-select-container > .ui-select-match > .form-control'
    ).type("comercial");
    cy.get(
      "#ui-select-choices-row-16-0 > .ui-select-choices-row-inner > .ng-scope > .ng-binding > .UI-SELECT-HIGHLIGHT"
    ).click();
    //historio
    cy.get("#tituloHistorico").type("2 titulos seram gerados");
    //desdobramento
    cy.get(".pull-left > .md-raised > span.ng-scope").click({ force: true });
    cy.wait(500);
    cy.get(".md-toolbar-tools").should("contain", "Desdobrar título");
    cy.get("#qtd_parcelas").click().type("2");
    //cy.get('md-dialog-actions.layout-row > .md-raised > span.ng-scope').click()
    cy.get("md-dialog-actions.layout-row > .md-raised").click({ force: true });
    //salvar
    cy.get('[ng-click="ctrl.salvarCadastro()"] > span.ng-scope').click({
      force: true,
    });
    cy.get(".toast-message").should("contain", "sucesso");
    cy.get(".toast > .md-icon-button > .ng-scope").click({ force: true });
    //botao atualiza
    cy.get(loc.menu.atualiza).click({ force: true });
  });
  it("Editar Titulo Contas a Receber", () => {

    if(loc.menu.navigator == false) {


      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      //seleciona cliente no menu
      cy.get(loc.financeiro.icone).click({ force: true });
      cy.get(loc.financeiro.contasReceber).click({ force: true });
      //Fechar navigator bar  { force: true }
      cy.get(loc.menu.fixar).click({ force: true });
      cy.get(loc.menu.caminho).should("contain", "Contas a receber");
      cy.wait(500);
  
      }else{
        cy.get(loc.financeiro.icone).click({ force: true });
        cy.get(loc.financeiro.contasReceber).click({ force: true });
        //Fechar navigator bar  { force: true }
        cy.get(loc.menu.fixar).click({ force: true });
        cy.get(loc.menu.caminho).should("contain", "Contas a receber"); 
        cy.wait(500);
      }
    // mais açoes
    cy.wait(500);
    cy.contains("ATHOS DE OLIVEIRA").dblclick({ force: true });
    cy.wait(500);
    cy.get(loc.menu.painel).should("contain", "ATHOS DE OLIVEIRA");
    cy.get(loc.menu.painel).should("contain", "500");
    //editar
    cy.wait(1000);
    cy.get('[ng-click="ctrl.editarCadastro()"]').click({ force: true });

    cy.wait(5000);

    cy.get(".select2-chosen.ng-binding").click({ force: true });
    cy.wait(500);
    cy.get(".search-container > .ui-select-search").type("AMANDA LIMA");
    cy.wait(500);
    cy.get(".md-list-item-text > .layout-column").click();
    cy.wait(500);
    cy.get(".div-td > .form-group > #nota").clear().type("95124");
    //portador
    cy.wait(500);
    cy.get("#finConta > .ui-select-match > .form-control").type("banco do nordeste do brasil");
    cy.wait(500);
    cy.get('.ui-select-choices-row-inner > .text-truncate').click();
    cy.wait(500);
    //data
    cy.get("#tituloVencimento").type("30122030");
    //valor
    cy.wait(500);
    cy.get("#tituloValorBruto").type("80000");
    cy.wait(500);
    cy.get(".card > .form-group > .ng-binding").should("contain", "800");
    //plano financeiro
    cy.wait(500);
    cy.get(
      ".input-group > .ui-select-container > .ui-select-match > .form-control"
    ).type("VENDAS DE MERCADORIAS");
    cy.wait(500);
    cy.get(".ui-select-choices-row-inner > .ng-scope > .ng-binding").click();
    //centro de custo
    cy.wait(500);
    cy.get(
      '[datasource="ctrl.modelo.rateios[0].rateios[0]"] > .form-group > .ui-select-container > .ui-select-match > .form-control'
    ).type("financeiro");
    cy.wait(500);
    cy.get(
      "#ui-select-choices-row-16-0 > .ui-select-choices-row-inner > .ng-scope > .ng-binding > .UI-SELECT-HIGHLIGHT"
    ).click();
    cy.wait(500);
    //salvar
    cy.get('[ng-click="ctrl.salvarCadastro()"] > span.ng-scope').click({
      force: true,
    });
    cy.get(".toast-message").should("contain", "sucesso");
    cy.get(".toast > .md-icon-button > .ng-scope").click({ force: true });
    cy.wait(500);
    //botao atualiza
    cy.get(loc.menu.atualiza).click({ force: true });
  });

  it("Baixa Titulo Contas a Receber", () => {
  
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.financeiro.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.financeiro.contasReceber).click({ force: true });
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
        cy.get(loc.financeiro.icone).click({ force: true });
        cy.wait(1000);
        cy.get(loc.financeiro.contasReceber).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 
    //abrir visualizar
    cy.wait(2000);
    cy.contains("AMANDA LIMA").dblclick({ force: true });
    cy.wait(5000);
    cy.get(loc.menu.painel).should("contain", "AMANDA LIMA");
    cy.get(loc.menu.painel).should("contain", "800");
    cy.wait(500);

    // MAIS AÇOES
    cy.get(".md-menu > .md-raised").click();
    cy.wait(500);
    cy.get(".md-menu-small > md-menu-item.ng-scope > .md-button").click();
    cy.wait(500);
    cy.get(loc.menu.painel).should("contain", "AMANDA LIMA");
    cy.get(loc.menu.painel).should("contain", "800");
    cy.get("#quitacaoFinConta > .ui-select-match > .form-control").type(
      "banco do nordeste do brasil"
    );
    cy.get(".ui-select-highlight").click();
    //salva
    cy.get(".md-group > .md-raised > span.ng-scope").click({ force: true });
    cy.get(".swal2-popup").should("contain", "sucesso");
    cy.get(".swal2-confirm").click({ force: true });
    //cy.get('.toast > .md-icon-button > .ng-scope').click({ force: true })
    //botao atualiza
    cy.get(loc.menu.atualiza).click({ force: true });
  });

  it("Criar e Excluir Titulo Contas a Receber", () => {
    if (cy.get('#navigation-menu').should("be.visible")) {
      cy.get('#main').click(300, 30)
      cy.get(loc.menu.navigator).click({ force: true }); //locators
      cy.wait(500);
      cy.get(loc.menu.fixar).click({ force: true }); //locators
      cy.wait(500);
      //seleciona cliente no menu
      cy.get(loc.financeiro.icone).click({ force: true });
      cy.wait(1000);
      cy.get(loc.financeiro.contasReceber).click({ force: true });
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
        cy.get(loc.financeiro.icone).click({ force: true });
        cy.wait(1000);
        cy.get(loc.financeiro.contasReceber).click({ force: true });
        cy.wait(5000);
      //  cy.get(loc.menu.caminho).should("contain", "");
        cy.wait(500);
        //Fechar navigator bar
        cy.get(loc.menu.fixar).click({ force: true });
        cy.wait(2000);
      } 
    //verifica acentuação
    //  cy.get('.panel').should('contain', 'Descrição').and('contain', 'Últ. Atualização')
    //adicionar titulo
    cy.get(loc.financeiro.adicionar).click({ force: true });
    cy.get(loc.financeiro.caminho).should("contain", "Cadastrar");
    //nome
    cy.get(".select2-chosen.ng-binding").click({ force: true });
    cy.get(".search-container > .ui-select-search").type("athos de oliveira");
    cy.get(".md-list-item-text > .layout-column").click();
    //portador
    cy.get("#finConta > .ui-select-match > .form-control").type("SICOOB");
    cy.get(".ui-select-highlight").click();
    //forma de pagamento
    cy.get("#finMeiopagamento > .ui-select-match > .form-control").type(
      "Dinheiro"
    );
    cy.get(".ui-select-choices-row-inner > .text-truncate").click();
    cy.get(":nth-child(2) > .form-group > #nota").type("18664");
    //data
    cy.get("#tituloVencimento").type("30092021");
    //valor
    cy.get("#tituloValorBruto").type("50000");
    cy.get("#tituloValorAcrescimo").type("18");
    cy.get("#tituloValorDesconto").type("13");
    //plano financeiro
    cy.get(
      ".input-group > .ui-select-container > .ui-select-match > .form-control"
    ).type("VENDAS DE MERCADORIAS");
    cy.get(".ui-select-choices-row-inner > .ng-scope > .ng-binding").click();
    //centro de custo
    cy.get(
      '[datasource="ctrl.modelo.rateios[0].rateios[0]"] > .form-group > .ui-select-container > .ui-select-match > .form-control'
    ).type("comercial");
    cy.get(
      "#ui-select-choices-row-16-0 > .ui-select-choices-row-inner > .ng-scope > .ng-binding > .UI-SELECT-HIGHLIGHT"
    ).click();
    //historio
    cy.get("#tituloHistorico").type("2 titulos seram gerados");
    //desdobramento
    cy.get(".pull-left > .md-raised > span.ng-scope").click({ force: true });
    cy.wait(500);
    cy.get(".md-toolbar-tools").should("contain", "Desdobrar título");
    cy.get("#qtd_parcelas").click().type("2");
    //cy.get('md-dialog-actions.layout-row > .md-raised > span.ng-scope').click()
    cy.get("md-dialog-actions.layout-row > .md-raised").click({ force: true });
    //salvar
    cy.get('[ng-click="ctrl.salvarCadastro()"] > span.ng-scope').click({force: true});
    cy.get(".toast-message").should("contain", "sucesso");
    cy.get(".toast > .md-icon-button > .ng-scope").click({ force: true });
    //botao atualiza
    cy.get(loc.menu.atualiza).click({ force: true });

    cy.contains("ATHOS DE OLIVEIRA").click()
    cy.get('[aria-label="Deletar"]').click({ force: true });
    cy.get('.swal2-confirm').click()
    cy.get(loc.menu.aviso).should('contain', 'sucesso')
    cy.get(loc.menu.fechaaviso).click({timeout: 10000})
  });


});
