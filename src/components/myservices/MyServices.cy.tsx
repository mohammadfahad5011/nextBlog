import React from "react";
import "/src/app/globals.css";
import MyServices from "./MyServices";

describe("<MyServices />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MyServices />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="MyServices"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
