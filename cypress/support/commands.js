// cypress/support/commands.js

// Login command
Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: '/api/login',
    body: {
      username: 'Zakaria1159',
      password: 'zakaria123'
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

// Setup test project (creates or reuses existing)
Cypress.Commands.add('setupTestProject', () => {
  // Store project ID in Cypress environment
  return cy.request({
    method: 'POST',
    url: '/api/projects',
    body: {
      title: 'Cypress Test Project',
      description: 'Automated test project',
      genre: 'Fantasy'
    },
    failOnStatusCode: false
  }).then((response) => {
    // If project already exists, get projects and find it
    if (response.status === 403) {
      return cy.request('GET', '/api/projects').then((getResponse) => {
        const testProject = getResponse.body.find(p => p.title === 'Cypress Test Project');
        if (testProject) {
          Cypress.env('testProjectId', testProject.id);
          return testProject.id;
        }
      });
    } else {
      expect(response.status).to.eq(201);
      Cypress.env('testProjectId', response.body.id);
      return response.body.id;
    }
  });
});

// Get test project ID
Cypress.Commands.add('getTestProjectId', () => {
  return cy.wrap(Cypress.env('testProjectId'));
});

// Create character on test project
Cypress.Commands.add('createCharacter', (characterData = {}) => {
  return cy.getTestProjectId().then((projectId) => {
    return cy.request({
      method: 'POST',
      url: '/api/characters',
      body: {
        projectId: projectId,
        name: 'Test Character',
        role: 'Supporting',
        ...characterData
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      return response.body;
    });
  });
});