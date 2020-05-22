/// <reference types="cypress" />

describe('Form header', () => {
    before(() => {
        cy.visit('/');
    });

    it('h1 text', () => {
        cy.get('h1').should('contain.text', 'Please subscribe');
    });
});