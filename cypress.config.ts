import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Test Results',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: true,
    saveJson: true,
    html: true,
    json: true,
    reportDir: 'cypress/reports',
    reportFilename: 'mochawesome',
    jsonDir: 'cypress/reports/json'
  },
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    setupNodeEvents(on, config){
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    screenshotOnRunFailure: true,
  },
})
