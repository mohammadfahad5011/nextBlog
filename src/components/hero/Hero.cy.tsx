import React from "react";
import "/src/app/globals.css";
import Hero from "./Hero";

describe("<Hero />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Hero />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="Hero"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
