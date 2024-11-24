import React from "react";
import "/src/app/globals.css";
import TextArea from "./TextArea";

describe("<TextArea />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TextArea />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="TextArea"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
