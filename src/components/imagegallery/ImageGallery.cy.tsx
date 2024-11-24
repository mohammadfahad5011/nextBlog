import React from "react";
import "/src/app/globals.css";
import ImageGallery from "./ImageGallery";

describe("<ImageGallery />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ImageGallery />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="ImageGallery"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
