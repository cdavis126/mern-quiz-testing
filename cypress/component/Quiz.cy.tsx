/// <reference types="cypress" />
import React from 'react';
import { mount } from '@cypress/react18';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
    mount(<Quiz />);
  });

  it('renders start button', () => {
    cy.contains('button', 'Start Quiz').should('be.visible');
  });

  it('starts quiz when clicking start button', () => {
    cy.contains('button', 'Start Quiz').click();
    cy.wait('@getQuestions');
    cy.contains('h2', 'Test question 1').should('be.visible');
  });
});
