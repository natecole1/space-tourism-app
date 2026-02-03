describe("crew page", () => {
  it("should show navbar and navigation dots on crew page for the commander hurley", () => {
    cy.visit("127.0.0.1:5500/src/crew/crew-commander.html");
    cy.get("[data-cy=navbar]").should("exist");
    cy.get("[data-cy=dot-navigation]").should("exist");
  });

  it("should navigate to pilot crew page when second dot is clicked", () => {
    cy.visit("127.0.0.1:5500/src/crew/crew-commander.html");
    cy.get('[data-cy=pilot]').click();
    cy.url().should("include", "/crew/crew-pilot.html");
  });

  it("should navigate to specialist crew page when third dot is clicked", () => {
    cy.visit("127.0.0.1:5500/src/crew/crew-commander.html");
    cy.get('[data-cy=specialist]').click();
    cy.url().should("include", "/crew/crew-specialist.html");
  });

  it("should navigate to engineer crew page when fourth dot is clicked", () => {
    cy.visit("127.0.0.1:5500/src/crew/crew-commander.html");
    cy.get('[data-cy=engineer]').click();
    cy.url().should("include", "/crew/crew-engineer.html");
  });
});
