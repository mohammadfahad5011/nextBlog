import React from "react";
import "/src/app/globals.css";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Counter />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="Counter"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
