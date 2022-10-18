describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
  });
});

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/');
    cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App');
  });
});
