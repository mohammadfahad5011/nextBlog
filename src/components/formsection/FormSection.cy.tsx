import React from "react";
import "/src/app/globals.css";
import FormSection from "./FormSection";

describe("<FormSection />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FormSection />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="FormSection"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
