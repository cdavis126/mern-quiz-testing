////come back to this later

import './commands';
import { mount } from 'cypress/react18';
import React from 'react';

Cypress.Commands.add('mount', mount => mount(mount));
