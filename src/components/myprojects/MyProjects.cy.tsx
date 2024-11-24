import React from "react";
import "/src/app/globals.css";
import MyProjects from "./MyProjects";

describe("<MyProjects />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MyProjects />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="MyProjects"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
