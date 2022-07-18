// Aassert tests
describe("Assertions", () => {
  // Visit base url before each test
  beforeEach(() => {
    cy.visit("/");
  });

  // "it" is the test. text describes the test. 
  // should() is the assertion here.
  it("check that the h1 is visible", () => {
    // check (assert) that <h1> is visible
    cy.get("h1")
      .contains("Kitchen Sink")
      .should("be.visible");

  });

  it("check that the navbar is visible", () => {
     // Assert that #navbar is visible and has a class named "navbar-collapse collapse"
     // this test has two assertions in it - while this is possible, best practices usually dictate these should be separate tests. 
     // .and() functions the same way as .should() - the syntax is different to make it more human readable.
     cy.get("#navbar")
       .should("be.visible")
       .and("have.class", "navbar-collapse collapse");
  });

  it("enters text into an input and checks the value", () => {
    //we can use variables inside of tests to ensure consistent elements and typed values.
    const name = "My name";
    cy.get("a").contains("get").click();
    cy.get("#inputName")
      .type(name)
      .should("have.value", name); //cannot use 'contains' on an input - need to use 'have.value'
  });

    // Using click() and type() to intract with elements
  it("click on a link and check for the correct url", () => {
    // Click on "get" link
    cy.get("a")
      .contains("get")
      .click();
    cy.url()
      .should('include', '/querying');
  });

  
});
