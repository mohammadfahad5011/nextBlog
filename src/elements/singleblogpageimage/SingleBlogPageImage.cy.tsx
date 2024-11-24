import React from "react";
import "/src/app/globals.css";
import SingleBlogPageImage from "./SingleBlogPageImage";

describe("<SingleBlogPageImage />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SingleBlogPageImage />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="SingleBlogPageImage"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
