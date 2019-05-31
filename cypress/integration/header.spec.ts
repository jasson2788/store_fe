describe('My First Test', (): void => {
    it('clicks the link "type"', (): void => {
        cy.visit('http://localhost:9000');
        cy.get('#sidemenu').click();
    });
});
