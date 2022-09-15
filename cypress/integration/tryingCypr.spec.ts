// app.spec.js

describe("React TodoMVC", () => {
    it("adds a single todo", () => {
      cy.visit("http://localhost:8888") // Arrange
      cy.get(".new-todo").type("Buy Milk{enter}") // Act
      cy.get(".todo-list li").should("have.length", 1) // Assert
    })
  })
  