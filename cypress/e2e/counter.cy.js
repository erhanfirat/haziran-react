describe("Counter component testi", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Navigate to counter page", () => {
    cy.get(":nth-child(2) > .btn").click();
    cy.contains("+ Arttır").click();
    cy.get("[data-cy=sayac-degeri]").should("have.text", "101");
  });

  
});
