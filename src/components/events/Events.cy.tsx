import React from "react";
import "/src/app/globals.css";
import Events from "./Events";

describe("<Events />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Events />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="Events"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
