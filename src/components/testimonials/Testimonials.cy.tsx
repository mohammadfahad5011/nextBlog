import React from "react";
import "/src/app/globals.css";
import Testimonials from "./Testimonials";

describe("<Testimonials />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Testimonials />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="Testimonials"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
