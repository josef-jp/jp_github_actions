describe('login', () => {
    it('Header', () => {
        cy.visit("http://tredgate.com/pmtool");
        cy.get("#username").type("admin");
    });
});