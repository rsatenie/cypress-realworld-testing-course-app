import cypress from "cypress"

// custom commands are used here to not write "data-qa/test" for each locator 

describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
  
    it("allows users to subscribe to the email list through input field", () => {
      cy.getBySel("email-input").type("tom@example.com")
      cy.getBySel("submit-button").click()
      cy.getBySel("success-message").should("exist").contains("tom@example.com")
    })

    it("does NOT allow an invalid email address", () => {
      cy.getBySel("email-input").type("tom")
      cy.getBySel("submit-button").click()
      cy.getBySel("success-message").should("not.exist")
    })

    it("does NOT allow subscribing with the same email address", () => {
      cy.getBySel("email-input").type("john@example.com ")
      cy.getBySel("submit-button").click()
      cy.getBySel("server-error-message").should("exist").contains("Error: john@example.com already exists. Please use a different email address.")

    })

})

