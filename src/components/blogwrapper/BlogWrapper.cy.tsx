import React from "react";
import "/src/app/globals.css";
import BlogWrapper from "./BlogWrapper";

describe("<BlogWrapper />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BlogWrapper />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="BlogWrapper"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
