import React from "react";
import "/src/app/globals.css";
import HeaderTitle from "./HeaderTitle";

describe("<HeaderTitle />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HeaderTitle />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="HeaderTitle"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
