// Create a custom command for search by data-testid

Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-testid="${selector}"]`, ...args);
});
