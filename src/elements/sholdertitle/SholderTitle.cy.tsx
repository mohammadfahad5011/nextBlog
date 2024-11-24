import React from "react";
import "/src/app/globals.css";
import SholderTitle from "./SholderTitle";

describe("<SholderTitle />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SholderTitle />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="SholderTitle"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
