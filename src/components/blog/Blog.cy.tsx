import React from "react";
import "/src/app/globals.css";
import Blog from "./Blog";

describe("<Blog />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Blog />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="Blog"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
