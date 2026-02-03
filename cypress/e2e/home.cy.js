describe('home page', () => {
  it('should show navigation bar', () => {
    cy.visit("127.0.0.1:5500/src/index.html")
    cy.get('[data-cy=navbar]').should('exist')
  })

  it('should redirect to destination page after link is clicked', () => {
    cy.visit("127.0.0.1:5500/src/index.html");
    cy.get('[data-cy=destination]').click();
    cy.url().should('include', '/destination/destination-moon.html');

  }) 

  it('should redirect to crew page after link is clicked', () => {
    cy.visit("127.0.0.1:5500/src/index.html");
    cy.get('[data-cy=crew]').click();
    cy.url().should('include', '/crew/crew-commander.html');
  })

  it('should redirect to technology page after link is clicked', () => {
    cy.visit("127.0.0.1:5500/src/index.html");
    cy.get('[data-cy=technology]').click();
    cy.url().should('include', '/technology/technology-capsule.html');
  })
})