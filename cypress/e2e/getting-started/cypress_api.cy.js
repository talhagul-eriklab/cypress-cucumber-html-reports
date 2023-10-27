/// <reference types="cypress" />

context('Cypress APIs', () => {

  context('Cypress.spec', () => {
   
    it('Get current spec information', () => {
    
      cy.api({
        url: "https://automationexercise.com/api/productsList",
        method: "GET",
        // body: {
        //   kullaniciAdi,
        //   sifre,
        //   locale,
        //   organizasyon,
        // },
      }).then((response) => {
        expect(response.status).to.eq(200);
      
      });

    })

    it('POST method example', () => {
    
      cy.api({
        url: "https://automationexercise.com/api/productsList",
        method: "POST",
     
      }).then((response) => {

        expect(response.status).to.eq(200);

        cy.api({
          url: "https://automationexercise.com/api/productsList",
          method: "GET",
     
        }).then((response) => {
          expect(response.status).to.eq(200);
        
        });
      
      });

    })

    it('iki istek aynı senaryo', () => {

      cy.api({
        url: "https://automationexercise.com/api/productsList",
        method: "GET",
      }).then((response) => {
        expect(response.status).to.eq(200);
      
      });

      cy.api({
        url: "https://automationexercise.com/api/productsList",
        method: "POST",
      }).then((response) => {

        expect(response.status).to.eq(200);
      
      });
    })


  })
})
