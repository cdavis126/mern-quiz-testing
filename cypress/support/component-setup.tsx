////come back to this later

import './commands';
import { mount } from 'cypress/react18';

// Correctly registers 'cy.mount()' command globally
Cypress.Commands.add('mount', mount);
