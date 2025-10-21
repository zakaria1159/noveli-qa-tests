describe('Protected features', () => {
  beforeEach(() => {
    cy.login()  // Logs in and preserves session cookies
  })
  it('should access protected page', () => {
    cy.visit('/dashboard')  // Cookies sent automatically
    cy.contains("Writer's Dashboard").should('be.visible')
  })
})