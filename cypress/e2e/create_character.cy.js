// cypress/e2e/character-creation.cy.js
describe('Character Creation API', () => {
  before(() => {
    cy.login();
    cy.setupTestProject();
  });

  beforeEach(() => {
    cy.login();
  });

  // These tests call the API directly - NO page visit needed
it('should create and display a character', () => {
  cy.createCharacter({
    name: 'John Doe',
    role: 'Protagonist'
  }).then((character) => {
    // Now visit the page to SEE it
    cy.getTestProjectId().then((projectId) => {
      cy.visit(`/characters?projectId=${projectId}`);
      
      // Visual verification - you'll see this in the browser
      cy.contains('John Doe').should('be.visible');
    });
  });
});
});