import React from "react";
import "/src/app/globals.css";
import Quote from "./Quote";

describe("<Quote />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quote />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="Quote"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
