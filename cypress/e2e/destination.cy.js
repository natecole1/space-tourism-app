describe('destination page', () => {
  it('should show navbar and navigation tabs on destination page for the moon', () => {
    cy.visit("127.0.0.1:5500/src/destination/destination-moon.html");
    cy.get('[data-cy=navbar]').should('exist')
    cy.get('[data-cy=tabs]').should('exist')
  })

  it('should navigate to mars destination page when mars tab is clicked', () => {
    cy.visit("http://127.0.0.1:5500/src/destination/destination-moon.html");
    cy.get('[data-cy=mars]').click();
    cy.url().should('include', '/destination/destination-mars.html')  
  })

  it('should navigate to europa destination page when europa tab is clicked', () => {
    cy.visit("http://127.0.0.1:5500/src/destination/destination-moon.html");
    cy.get('[data-cy=europa]').click();
    cy.url().should('include', '/destination/destination-europa.html')
  })

  it('should navigate to titan destination page when titan tab is clicked', () => {
    cy.visit("http://127.0.0.1:5500/src/destination/destination-moon.html");
    cy.get('[data-cy=titan]').click();
    cy.url().should('include', '/destination/destination-titan.html')
  })
})

