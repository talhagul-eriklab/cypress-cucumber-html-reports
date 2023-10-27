import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const apiPage = require('../../pages/ApiPage');


    Given("Get current spec information", () => {
        apiPage.getCurrent()
    });

    Then("POST method example", () => {
        apiPage.postMethod()
    });

    Then("iki istek aynı senaryo", () => {
        apiPage.ikiIstek()
    });

