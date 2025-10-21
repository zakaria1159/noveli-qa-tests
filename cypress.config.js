const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://noveli.app",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos"
  }
});
