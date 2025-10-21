describe('Noveli Homepage', () => {
  it('should load the homepage successfully', () => {
    cy.visit('https://noveli.app') // or your Noveli URL
    cy.contains('Noveli').should('be.visible')
  })

  it('should have a functioning navigation', () => {
    cy.visit('https://noveli.app')
    // Add checks for your actual navigation elements
    cy.get('nav').should('exist')
  })
})