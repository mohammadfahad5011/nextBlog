import React from "react";
import "/src/app/globals.css";
import SingleBlogPageHeroBottomText from "./SingleBlogPageHeroBottomText";

describe("<SingleBlogPageHeroBottomText />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SingleBlogPageHeroBottomText />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="SingleBlogPageHeroBottomText"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
