import {
    Given,
    When,
    And,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

const registerPage = require("../../pages/registerPage");

// Given User goes to the website
Given("User goes to the website", () => {
    cy.visit("/");
});

// And User has not authenticated
And("User has not authenticated", () => {
    cy.url().should("not.contains", "/dashboard");
});

// And User selects the Register option
And("User selects the Register option", () => {
    cy.get("a").click();
    cy.get(".menu-drop").should("be.visible");
    cy.get("a[href='/register']").click();
});

// And Register Page should be loaded successfully
And("Register Page should be loaded successfully", () => {
    cy.url().should("contains", "/register");
});
