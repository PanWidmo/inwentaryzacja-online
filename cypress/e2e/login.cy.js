import '@testing-library/cypress/add-commands';

describe('Login', () => {
  it('Should allow user to login', () => {
    cy.visit('http://localhost:3000/login');
    cy.findByRole('textbox', { name: /email/i }).type('admin@admin.pl');
    cy.findByLabelText(/hasło/i).type('x');
    cy.findByRole('button', { name: /zaloguj/i }).click();
    cy.findByRole('banner').contains('Wybierz swoją rolę').should('be.visible');
  });
});
