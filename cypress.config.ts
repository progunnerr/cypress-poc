import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    chart: false,
    reportPageTitle: 'Cypress Test Results',
    embeddedScreenshots: false,
    inlineAssets: false,
    saveAllAttempts: false,
    overwrite: false,
    saveJson: true,
    html: false,
    json: true,
    reportDir: 'cypress/reports',
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
