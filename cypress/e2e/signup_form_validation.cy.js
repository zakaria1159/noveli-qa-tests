describe("Signup flow test", () => {
  const email = `qa_${Date.now()}@example.com`;
  const username = `qauser${Date.now()}`;

  it("should show email verification required after valid signup", () => {
    cy.visit("https://noveli.app");
    cy.contains("Sign In").click();
    cy.contains("Register").click();

    // Fill invalid password first to test validation
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type("1234");
    cy.get('button[type="submit"]').click();

    // Expect password validation message
    cy.contains(/password.*(at least|minimum)/i).should("be.visible");

    // Try again with a valid password
    cy.get('input[name="password"]').clear().type("ValidPass123!");
    cy.get('input[name="confirmPassword"]').clear().type("ValidPass123!"); // if present
    cy.get('button[type="submit"]').click();

    // Assert that the user sees the email verification message
    cy.contains("Email Verification Required").should("be.visible");
    cy.contains("You must verify your email address before accessing Noveli.").should("be.visible");

    // Optional: check the "Logged in as" text contains the same email
    cy.contains(`Logged in as:`).should("be.visible");
    cy.contains(email).should("be.visible");

    // Bonus: ensure “Resend Verification Email” and “Logout” are on the page
    cy.contains("Resend Verification Email").should("be.visible");
    cy.contains("Logout").should("be.visible");
  });
});
