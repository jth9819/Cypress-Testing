// Use locators to select elements
describe("Locators", () => {
  // Visit base url before each test
  beforeEach(() => {
    cy.visit("/");
  });

  // Using get(), contains(), and find()
  it("locating elements with get", () => {
    // Select <h1> tag using get()
    cy.get("h1");
  });

  it("find an element with specific text (contains)", () => {
    // Select element that contains specific text using contains()
    cy.contains(
      "This is an example app used to showcase Cypress.io testing. For a full reference of our documentation, go to docs.cypress.io"
    );
  });

  it("locating elements with get AND contains", () => {
    // Combines get() and contains() to select element
    cy.get("h2").contains("Commands");
  });

  it("locating elements with get, contains, and find", () => {
    // Combines get(), contains(), and find() to select element
    cy.get("li").find("a").contains("get"); // Looks for list element, then finds the anchor tag, then finds text that contains "get"
  });

  describe('Querying using Within()', () => {
    // Visit base url before each test
    beforeEach(() => {
      cy.visit("/");
    });

    it('Find Email / Password inputs', () => {
      //need xpath plugin installed and set up to use the cy.xpath function
        cy.xpath(`//li/ul/li/a[contains(text(), 'within')]`).click()

        //'within' scopes all subsequent cy commands within this element - particularly useful for forms (like this example)
        cy.get('.query-form').within(() => {
            cy.get('input:first')
              .should('have.attr', 'placeholder', 'Email')
            cy.get('input:last')
              .should('have.attr', 'placeholder', 'Password')
        })
    })
})
});
