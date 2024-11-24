import React from "react";
import "/src/app/globals.css";
import SingleBlogPage from "./SingleBlogPage";

describe("<SingleBlogPage />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SingleBlogPage />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="SingleBlogPage"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
