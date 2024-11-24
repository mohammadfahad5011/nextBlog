import React from "react";
import "/src/app/globals.css";
import RandomText from "./RandomText";

describe("<RandomText />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RandomText />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="RandomText"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
