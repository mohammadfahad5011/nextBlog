---
to: src/components/<%= h.changeCase.lower(name) %>/<%= h.changeCase.pascalCase(name) %>.cy.tsx
---

import React from 'react'
import "/src/app/globals.css";
import <%= h.changeCase.pascalCase(name) %> from './<%= h.changeCase.pascalCase(name) %>'

describe('<<%= h.changeCase.pascalCase(name) %> />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<<%= h.changeCase.pascalCase(name) %> />)

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="<%= h.changeCase.pascalCase(name) %>"]')
    
    // This should pass
    component.should('be.visible')

    // This should fail
    component.contains('Please edit this component to add your own content')

  })
})