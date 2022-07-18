// Interact with elements
context('Interactions', () => {
  // Visit base url before each test
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Interact with elements", () => {
    // Using click() to intract with elements
    it("click on a link and confirm url", () => {
      // Click on "get" link
      cy.get("a").contains("get").click();
    });

    // Using type() to intract with elements
    it("type into an element", () => {
      cy.get("a").contains("get").click();
      cy.get("#inputName").type("My name")
    })

    it("focus on an element", () => {
      cy.xpath(`//li/ul/li/a[contains(text(), 'type')]`).click()
      cy.get('.action-focus')
      //focus a dom element
      .focus()
      .should('have.class', 'focus')
      //Get the immediately preceding sibling of each element in a set of the elements. In this case, we're getting the label for the input.
      .prev()
      .should('have.attr', 'style', 'color: orange;')
    })

  });

  describe('Waiting', () => {
    it('Fill in the 3 inputs, waiting 1 second between each input', () => {      
        cy.xpath(`//li/ul/li/a[contains(text(), 'wait')]`)
          .click()

        cy.get('.wait-input1').type('Wait 1000ms after typing')
        cy.wait(1000)
        cy.get('.wait-input2').type('Wait 1000ms after typing')
        cy.wait(1000)
        cy.get('.wait-input3').type('Wait 1000ms after typing')
        cy.wait(1000)
    })
  })

  describe('Invoking Elements', () => {
    it('Invokes show on a hidden element', () => {      
        cy.xpath(`//li/ul/li/a[contains(text(), 'invoke')]`)
          .click()

        cy.get('.connectors-div')
          .should('be.hidden')
          .invoke('show')
          .should('be.visible')
    })
  })

})