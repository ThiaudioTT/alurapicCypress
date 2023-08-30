// eh bom separar caminhos felizes e caminhos tristes

describe('Página de cadastro', () => {
  it('Preencher os campos do formulario corretamente para novo cadastro', () => {
    cy.visit('http://localhost:4200/#/home');
    cy.contains('a', 'Register now').click();
    // cy.get('[formcontrolname="email"]').type('catarina@email.com.br');
    // cy.get('[formcontrolname="fullName"]').type('Catarina Pessoa');
    // cy.get('[formcontrolname="userName"]').type('catarinap');
    // cy.get('[formcontrolname="password"]').type('catarina123');

    // cy.contains('button', 'Register').click();

    cy.get('[data-test="email"]').type('catarina@email.com.br');
    cy.get('[data-test="fullName"]').type('Catarina Pessoa');
    cy.get('[data-test="registerUserName"]').type('catarinap');
    cy.get('[data-test="registerPassword"]').type('catarina123');
    cy.contains('button', 'Register').click();

  })
})
