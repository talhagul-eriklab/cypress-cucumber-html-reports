@tables
Feature:E-bebek Alışveriş Sepeti Senaryosu

    Scenario: Biberon Ürününü Sepete Ekleme
      Given E-bebek ana sayfasına gidilir 
      And Arama çubuğuna "biberon" yazılır ve aratılır
      And Çıkan ilk ürüne tıklanır
      And İlgili ürün sepete eklenir
      Then Sepete eklendiği kontrol edilir