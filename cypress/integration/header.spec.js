describe('My First Test', () => {
    it('clicks the link "type"', () => {
        cy.visit('http://localhost:9000');
        cy.get('#sidemenu').click();
    });
});
