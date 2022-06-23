// Interact with elements
describe("Interact", () => {
  // Visit base url before each test
  beforeEach(() => {
    cy.visit("/");
  });

  // Using click() and type() to intract with elements
  it("intracting with elements with click and type", () => {
    // Click on "get" link
    cy.get("a").contains("get").click();

    // Click on inputName input and type "My name"
    cy.get("#inputName").type("My name");
  });
});
