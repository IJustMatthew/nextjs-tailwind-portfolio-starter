describe("Basic tests", () => {
  beforeEach(() => {
    // Config baseUrl in cypress.config.ts
    cy.visit("/")
  })

  // Text content match test
  it("Should contain correct header text", () => {
    cy.getDataTest("hero-title")
      .should(
        "contain.text",
        "Portfolio Starter kit - Next.js & Tailwind & Contentlayer"
      )
      .should("be.visible")
  })

  // Dark/Light mode toggle test
  it("Should change theme mode", () => {
    cy.get("html").should("have.class", "dark")
    cy.getDataTest("dark-mode-toggle").click()
    cy.get("html").should("not.have.class", "dark")
  })

  // Language select test
  it("Should change Language", () => {
    cy.get("html").should("have.attr", "lang", "en")
    cy.getDataTest("language-change").click()
    cy.get("#language-switcher").within(() => {
      cy.contains("DE").click()
    })
    cy.get("html").should("have.attr", "lang", "de")
  })

  // Contact form test
  it("Should test the Contact Form", () => {
    cy.getDataTest("contact-form").should("exist")
    cy.getDataTest("form-status").contains("untouched")

    // Submit form without filling any fields
    cy.getDataTest("contact-form").within(() => {
      cy.getDataTest("contact-submit").click()
      cy.getDataTest("contact-name-error").should("be.visible")
      cy.getDataTest("contact-email-error").should("be.visible")
      cy.getDataTest("contact-subject-error").should("be.visible")
      cy.getDataTest("contact-message-error").should("be.visible")
    })

    cy.getDataTest("contact-form").within(() => {
      // Fill the form and submit
      cy.getDataTest("contact-name").type("Test Name")
      cy.getDataTest("contact-email").type("test@example.com")
      cy.getDataTest("contact-subject").type("Test subject")
      cy.getDataTest("contact-message").type("Test message")
      cy.getDataTest("contact-submit").click()

      // Check if error messages are removed
      cy.getDataTest("contact-name-error").should("not.exist")
      cy.getDataTest("contact-email-error").should("not.exist")
      cy.getDataTest("contact-subject-error").should("not.exist")
      cy.getDataTest("contact-message-error").should("not.exist")

      // Check if form status is success or error
      cy.getDataTest("form-status").contains(/success|error/)

      // If form status is success, check if form fields are empty
      cy.getDataTest("form-status").then(($text) => {
        if ($text[0].innerText === "success") {
          cy.getDataTest("contact-name").should("be.empty")
          cy.getDataTest("contact-email").should("be.empty")
          cy.getDataTest("contact-subject").should("be.empty")
          cy.getDataTest("contact-message").should("be.empty")
        }
      })
    })
  })
})
