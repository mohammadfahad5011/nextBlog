import React from "react";
import "/src/app/globals.css";
import Test from "./Test";

describe("<Test />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Test />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="Test"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
