import React from "react";
import "/src/app/globals.css";
import Form from "./Form";

describe("<Form />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Form />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="Form"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
