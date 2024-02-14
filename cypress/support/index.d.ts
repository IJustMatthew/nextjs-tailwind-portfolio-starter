declare namespace Cypress {
  interface Chainable<Subject = any> {
    getDataTest(dataTestSelector): Chainable<any>
  }
}
