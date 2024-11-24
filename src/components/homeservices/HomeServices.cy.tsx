import React from "react";
import "/src/app/globals.css";
import HomeServices from "./HomeServices";

describe("<HomeServices />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HomeServices />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="HomeServices"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
