describe("technology page", () => {
  it("should show navbar and navigation numbered indicator on technology page for the capsule", () => {
    cy.visit("127.0.0.1:5500/src/technology/technology-capsule.html");
    cy.get("[data-cy=navbar]").should("exist");
    cy.get("[data-cy=numbered-navigation]").should("exist");
  });

  it("should navigate to spaceport technology page when second numbered button is clicked", () => {
    cy.visit("127.0.0.1:5500/src/technology/technology-capsule.html");  
    cy.get('[data-cy=spaceport]').click();
    cy.url().should("include", "/technology/technology-spaceport.html");
  });

  it("should navigate to vehicle technology page when third numbered button is clicked", () => {
    cy.visit("127.0.0.1:5500/src/technology/technology-capsule.html");  
    cy.get('[data-cy=vehicle]').click();
    cy.url().should("include", "/technology/technology-vehicle.html");
  } );
});
