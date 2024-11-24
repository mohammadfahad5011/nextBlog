import React from "react";
import "/src/app/globals.css";
import SingleBlogSlider from "./SingleBlogSlider";

describe("<SingleBlogSlider />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SingleBlogSlider />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="SingleBlogSlider"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
