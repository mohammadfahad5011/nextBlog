import React from "react";
import "/src/app/globals.css";
import CompanyListing from "./CompanyListing";

describe("<CompanyListing />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CompanyListing />);

    // ADD YOUR TESTS HERE
    const component = cy.get('[data-cy="CompanyListing"]');

    // This should pass
    component.should("be.visible");

    // This should fail
    component.contains("Please edit this component to add your own content");
  });
});
