import React from "react";
import "/src/app/globals.css";
import SectionTitle from "./SectionTitle";

describe("<SectionTitle />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SectionTitle />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="SectionTitle"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
