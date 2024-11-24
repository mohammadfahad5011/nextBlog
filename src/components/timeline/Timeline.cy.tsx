import React from "react";
import "/src/app/globals.css";
import Timeline from "./Timeline";

describe("<Timeline />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Timeline />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="Timeline"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
