/// <reference types="cypress" />

describe('', () => {
    before('', () => {
        cy.visit('http://localhost:1667/#/');
    });

    it('', () => {
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type('tester@qa.com');
        cy.get(':nth-child(2) > .form-control').type('qNfJ656BMKfCkRx');
        cy.get('.btn').click();

        cy.get(':nth-child(4) > .nav-link').contains('Danylo').should('exist');
    })
});