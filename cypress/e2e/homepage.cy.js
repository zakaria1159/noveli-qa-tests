describe('Noveli Homepage', () => {
  beforeEach(() => {
    // Clear coverage data before each test
    cy.window().then((win) => {
      win.__coverage__ = {};
    });
  });

  it('should load the homepage successfully', () => {
    cy.visit('/');  // Uses baseUrl from config
    
    // This interaction triggers code coverage collection
    cy.contains('Noveli').should('be.visible');
    
    // Check that the page loaded completely
    cy.get('body').should('be.visible');
    
    // Optional: Verify coverage is being collected
    cy.window().then((win) => {
      if (win.__coverage__) {
        cy.log('✓ Coverage data collected');
      }
    });
  });

  it('should have a functioning navigation', () => {
    cy.visit('/');
    
    // Test navigation interactions (generates more coverage)
    cy.get('nav').should('exist');
    
    // Click navigation items to cover more code paths
    cy.get('nav').within(() => {
      cy.contains('Pricing').click();
      cy.url().should('include', 'pricing');
    });
    
    // Go back to homepage
  // cy.visit('/');
  //  cy.get('nav').within(() => {
  //    cy.contains('Pricing').click();
   ///   cy.url().should('include', 'pricing');
  //  });
  });





  afterEach(() => {
    // Ensure coverage is saved after each test
    cy.window().then((win) => {
      if (win.__coverage__) {
        const coverage = win.__coverage__;
        const files = Object.keys(coverage).length;
        cy.log(`Coverage collected for ${files} files`);
      }
    });
  });
});