import React from "react";
import "/src/app/globals.css";
import CoverImageSection from "./CoverImageSection";

describe("<CoverImageSection />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CoverImageSection />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="CoverImageSection"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
