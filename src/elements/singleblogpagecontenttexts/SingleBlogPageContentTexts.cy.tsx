import React from "react";
import "/src/app/globals.css";
import SingleBlogPageContentTexts from "./SingleBlogPageContentTexts";

describe("<SingleBlogPageContentTexts />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SingleBlogPageContentTexts />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="SingleBlogPageContentTexts"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
