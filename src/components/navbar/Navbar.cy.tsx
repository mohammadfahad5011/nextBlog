import React from "react";
import "/src/app/globals.css";
import Navbar from "./Navbar";

describe("<Navbar />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Navbar />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="Navbar"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
