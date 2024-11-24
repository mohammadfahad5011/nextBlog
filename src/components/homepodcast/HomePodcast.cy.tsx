import React from "react";
import "/src/app/globals.css";
import HomePodcast from "./HomePodcast";

describe("<HomePodcast />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HomePodcast />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="HomePodcast"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
