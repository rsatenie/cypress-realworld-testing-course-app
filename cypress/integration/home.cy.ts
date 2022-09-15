// describe("Newsletter Subscribe Form", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000")
//   })

//   it("allows users to subscribe to the email list", () => {
//     cy.getByData("email-input")
//   })
// })


describe("home page", () => {
    it("the h1 contains the correct text", () => {
      cy.visit("http://localhost:3000")
    })
  })

  it("the h1 contains the correct text", () => {
    cy.getBySel("hero-heading")
      .contains("Testing Next.js Applications with Cypress")
  })

  