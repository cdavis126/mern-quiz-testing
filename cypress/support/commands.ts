/// <reference types="cypress" />

// ***********************************************
// Custom commands for your Tech Quiz Cypress --you cab add more custom commands here
// ***********************************************

// Example of a custom command to simplify component mounting (optional)
Cypress.Commands.add('mountQuiz', () => {
    cy.mount(<Quiz />);
  });
  
  // Extend Cypress' global Chainable type
  declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to mount the Quiz component easily in tests.
         * @example cy.mountQuiz()
         */
        mountQuiz(): Chainable<void>;
      }
    }
  }
  
  export {};
  