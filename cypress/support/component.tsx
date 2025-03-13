import React from 'react';
import { mount, MountOptions, MountReturn } from 'cypress/react18';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';

declare global {
  namespace Cypress {
    interface Chainable {
      mount(
        component: React.ReactNode,
        options?: MountOptions & { routerProps?: MemoryRouterProps }
      ): Cypress.Chainable<MountReturn>;
    }
  }
}

Cypress.Commands.add('mount', (component, options = {}) => {
  const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options;

  return mount(<MemoryRouter {...routerProps}>{component}</MemoryRouter>, mountOptions);
});
