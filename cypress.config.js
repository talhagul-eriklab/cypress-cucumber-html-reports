const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
    
  // reporterOptions: {
  //   saveHtml: true,
  // },
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      // require('cypress-mochawesome-reporter/plugin')(on);
      
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      // allureWriter(on, config);

      return config;
    },

    // specPattern: ["cypress/*/features/*/*.feature","cypress/*/features/*.feature"],

    specPattern: ["cypress/*/features/*/*.feature","cypress/*/features/*.feature","cypress/*/*/*.cy.js"],
    chromeWebSecurity:false,
    video:false,
    
  },

 
});
