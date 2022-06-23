// Aassert tests
describe("Assert", () => {
  // Visit base url before each test
  beforeEach(() => {
    cy.visit("/");
  });

  // Using should() and and() to assert
  it("assert link is visible", () => {
    // Assert that <h1> is visible
    cy.get("h1").contains("Kitchen Sink").should("be.visible");

    // Assert that #navbar is visible and has a class named "navbar-collapse collapse"
    cy.get("#navbar")
      .should("be.visible")
      .and("have.class", "navbar-collapse collapse");
  });
});
