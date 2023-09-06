describe('Página de login', () => {
  it('Deve se logar corretamente', () => {
    cy.visit('http://localhost:4200/#/home');

    // login: catarinap
    // senha: catarina123

    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');

    cy.get('[data-test="loginUserName"]').type('catarinap');
    // cy.contains('User name is required!').should('not.be.visible');

    cy.get('[data-test="loginPassword"]').type('catarina123');
    // cy.contains('Password is required!').should('not.be.visible');

    cy.contains('[data-test="loginBtn"]', 'login').click();
  });
});
