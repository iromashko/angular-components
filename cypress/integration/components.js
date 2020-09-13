/// <reference types='Cypress' />

describe("Component testing", () => {
  it("Top of page button", () => {
    cy.visit("/");
    cy.scrollTo("bottom");
    cy.get("button.is-shown")
      .should("be.visible")
      .click()
      .should("not.be.visible");
  });
});
