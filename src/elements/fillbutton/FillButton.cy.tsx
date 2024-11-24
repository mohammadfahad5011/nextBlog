import React from "react";
import "/src/app/globals.css";
import FillButton from "./FillButton";

describe("<FillButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FillButton />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="FillButton"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
