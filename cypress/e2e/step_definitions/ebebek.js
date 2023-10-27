import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const ebebek = require('../../pages/EbebekPage');



	Given("E-bebek ana sayfasına gidilir", () => {
		ebebek.navigate()
	});

	Then("Arama çubuğuna {string} yazılır ve aratılır", (aranacakKelime) => {
		ebebek.search(aranacakKelime)
	});

	Then("Çıkan ilk ürüne tıklanır", () => {
	});

	Then("İlgili ürün sepete eklenir", () => {
	});

	Then("Sepete eklendiği kontrol edilir", () => {
	});
