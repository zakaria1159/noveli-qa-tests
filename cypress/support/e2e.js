// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@cypress/code-coverage/support';

beforeEach(() => {
  cy.log('Coverage tracking active');
});

afterEach(() => {
  // This ensures coverage data is sent after each test
  cy.window().then((win) => {
    if (win.__coverage__) {
      cy.task('coverage', win.__coverage__, { log: false });
    }
  });
});