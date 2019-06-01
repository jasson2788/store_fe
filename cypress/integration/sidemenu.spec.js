/* eslint-disable no-magic-numbers */
describe('Sidemenu Tests', () => {
    it('Sidemenu left is oppening', () => {
        cy.visit('http://localhost:9000');
        cy.get('#sidemenu_button').click();
        cy.get('#sidemenu_sidemenu_container')
            .should('be.visible');
        cy.get('#sidemenu_sidemenu_opacity')
            .should('have.css', 'visibility', 'visible')
            .should('have.css', 'opacity', '1');
        cy.get('#options_sidemenu_container')
            .should('not.be.visible');
        cy.get('#options_sidemenu_opacity')
            .should('not.be.visible');
    });
});
