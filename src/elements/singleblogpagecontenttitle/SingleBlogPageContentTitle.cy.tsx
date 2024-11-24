import React from "react";
import "/src/app/globals.css";
import SingleBlogPageContentTitle from "./SingleBlogPageContentTitle";

describe("<SingleBlogPageContentTitle />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SingleBlogPageContentTitle />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="SingleBlogPageContentTitle"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
