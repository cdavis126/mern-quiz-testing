/// <reference types="cypress" />

describe('Quiz E2E Test', () => {
    beforeEach(() => {
      cy.intercept("GET", "/api/questions/random", { fixture: "questions.json" }).as("getQuestions");
      cy.visit('/');
    });
  
    it('fetches and displays first question', () => {
      cy.contains('button', 'Start Quiz').click();
      cy.wait('@getQuestions');
  
      cy.get('@getQuestions').then(({ response }) => {
        expect(response.statusCode).to.eq(200);
        const firstQuestion = response.body[0];
        cy.contains('h2', firstQuestion.question).should('be.visible');
      });
    });
  });
  