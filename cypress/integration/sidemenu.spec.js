/* eslint-disable no-magic-numbers */

const isOpenned = (openned) => {
    cy.get(`#${openned}_sidemenu_container`)
        .should('be.visible');
    cy.get(`#${openned}_sidemenu_opacity`)
        .should('have.css', 'visibility', 'visible')
        .should('have.css', 'opacity', '1');
};

const isClosed = (closed) => {
    cy.get(`#${closed}_sidemenu_container`)
        .should('not.be.visible');
    cy.get(`#${closed}_sidemenu_opacity`)
        .should('not.be.visible');
};

const sidemenuLeft = () => {
    cy.visit('http://localhost:9000');
    cy.get('#sidemenu_button').click();
    isOpenned('sidemenu');
    isClosed('options');
};

const sidemenuLeftOpenCloseLoop = () => {
    cy.visit('http://localhost:9000');

    for (let i = 0; i < 10; i++) {
        cy.get('#sidemenu_button').click();
        isOpenned('sidemenu');
        cy.get('#sidemenu_sidemenu_opacity').click();
        isClosed('sidemenu');
    }
};

describe('Sidemenu Tests', () => {

    it('Sidemenu left is oppening', sidemenuLeft);

    it('Sidemenu left is oppening and closing toggle', sidemenuLeftOpenCloseLoop);

});
