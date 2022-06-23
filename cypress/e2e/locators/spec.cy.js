// Use locators to select elements
describe("Locators", () => {
  // Visit base url before each test
  beforeEach(() => {
    cy.visit("/");
  });

  // Using get(), contains(), and find()
  it("locating elements with get", () => {
    // Get element by selecting <h1> tag
    cy.get("h1");

    // Get element that contains specific text
    cy.contains(
      "This is an example app used to showcase Cypress.io testing. For a full reference of our documentation, go to docs.cypress.io"
    );

    // Combines get() and contains() to select element
    cy.get("h2").contains("Commands");

    // Combines get(), contains(), and find() to select element
    cy.get("li").find("a").contains("get"); // Looks for list element, then anchor tag, then text that contains "get"
  });
});
