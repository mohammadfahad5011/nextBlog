import React from "react";
import "/src/app/globals.css";
import Podcast from "./Podcast";

describe("<Podcast />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Podcast />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="Podcast"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
