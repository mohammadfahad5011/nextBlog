import React from "react";
import "/src/app/globals.css";
import CtaBtn from "./CtaBtn";

describe("<CtaBtn />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CtaBtn />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="CtaBtn"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
