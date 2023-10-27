

class ApiPage {
    
    element={
        link: "https://www.e-bebek.com/",
        button: () => cy.xpath("//input[@id='txtSearchBox'][1]")
    
    }   

    getCurrent(){
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
    }

    postMethod(){
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
    }

    ikiIstek(){
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
    }
   
}

module.exports =new ApiPage();

