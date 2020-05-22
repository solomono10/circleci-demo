/// <reference types="cypress" />

describe('Form footer', () => {
    before(() => {
        cy.visit('/');
    });

    it('p text', () => {
        cy.get('p').should('contain.text', '2017-2019');
    });
});