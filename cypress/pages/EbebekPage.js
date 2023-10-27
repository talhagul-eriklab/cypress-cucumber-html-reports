

class EbebekPage {
    element={
        link: "https://www.e-bebek.com/",
        button: () => cy.xpath("//input[@id='txtSearchBox'][1]")
    
    }   

    navigate(){
        cy.visit(this.element.link);
        cy.wait(3000);
    }

    search(aranacakKelime){
        this.element.button().type(aranacakKelime +'{enter}');
        //cy.get('#txtSearchBox').first().type(aranacakKelime +'{enter}')
    }
   
}

module.exports =new EbebekPage();

