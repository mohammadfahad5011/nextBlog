import React from "react";
import "/src/app/globals.css";
import Features from "./Features";

describe("<Features />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Features />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="Features"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
