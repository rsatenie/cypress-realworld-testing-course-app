import coursesJson from "../../data/courses.json"
// const { _ } = Cypress

// describe("RWT Home", function () {
//   beforeEach(function () {
//     cy.visit("/")
//   })

//   it("renders all of the course titles, descriptions & lessons", function () {
//     const courses = Object.keys(coursesJson)

//     _.each(courses, (course, index) => {
//       const title = coursesJson[course].title
//       const description = coursesJson[course].description
//       const lessons = coursesJson[course].lessons

//       cy.getBySel(`course-${index}`).within(($course) => {
//         cy.getBySel("course-title").contains(title)
//         cy.getBySel("course-description").contains(description)

//         _.each(lessons, (lesson, index) => {
//           const lessonTitle = lessons[index].title
//           cy.getBySel(`lesson-${index}`).contains(lessonTitle)
//         })
//       })
//     })
//   })
// })

// export {}



describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000") // To not call login on each test case
  })


  context ("Hero section", () => {
  
    it("the h1 contains the correct text", () => {
      cy.getBySel("hero-heading").contains(
      "Testing Next.js Applications with Cypress"
    )
    })
    
    // '.only' Indicates this test 
    // should be executed exclusively


    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0)
        .contains("4 Courses")
        // .contains("4 Courses") //! example error-message
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")

    })
  })

  context.only("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getBySel("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
  
    it("Course: Testing Foundations", () => {
      cy.getBySel("course-1").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })
  
    it("Course: Cypress Fundamentals", () => {
      cy.getBySel("course-2").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })


})

