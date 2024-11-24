import React from "react";
import "/src/app/globals.css";
import HomeIntro from "./HomeIntro";

describe("<HomeIntro />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HomeIntro />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="HomeIntro"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
