/// <reference types="Cypress" />

context('Request', () => {
  it('GET', () => {
    cy.request({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character/?name=rick'
    }).should(({ status, body }) => {
      const { results } = body;
      expect(status).to.eq(200);
      expect(results.length).to.eq(20);
    });
  });

  it('Searching with empty field', () => {
    cy.visit('/');
    cy.get('input.block').click()
      .type('{enter}');
    cy.contains('small', 'Field is a required field');
  });

  it('Searching with 3 characters', () => {
    cy.visit('/');
    cy.get('input.block').type('ric');
    cy.contains('small', 'Field must be at least 4 characters');
  });

  it('Searching with 22 characters', () => {
    cy.visit('/');
    cy.get('input.block').type('searching with 22 characters');
    cy.contains('small', 'Field must be at most 20 characters');
  });

  it('Should show 20 items', () => {
    cy.visit('/');
    cy.get('input.block').type('rick').type('{enter}');
    cy.wait(3000);
    cy.get('div').siblings('.item-card');
  });
});
