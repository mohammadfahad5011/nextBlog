import React from "react";
import "/src/app/globals.css";
import InputField from "./InputField";

describe("<InputField />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<InputField />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="InputField"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
