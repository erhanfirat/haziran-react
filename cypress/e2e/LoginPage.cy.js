describe("Counter component testi", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Test email validation", () => {
    cy.get("#user-mail").type("asd@asd");
    cy.contains("Ama bu Jimmy değil!");
  });

  it("Test password validation", () => {
    cy.get("#user-pass").type("12345");
    cy.contains("Passwords must be at least 6 characters long.");
  });

  it("Login button disabled check", () => {
    cy.get("[data-cy=login-button]").should("be.disabled");
  });

  it("Fill the login form", () => {
    cy.get("#user-mail").type("jimmy@handrix.com");
    cy.get("#user-pass").type("asdasdas");
    cy.get("#terms").check();
    cy.get("[data-cy=radio-option-1]").check();
    cy.get("[data-cy=select-role]").select("admin");
    cy.get("[data-cy=login-button]").should("not.be.disabled");
  });
});
