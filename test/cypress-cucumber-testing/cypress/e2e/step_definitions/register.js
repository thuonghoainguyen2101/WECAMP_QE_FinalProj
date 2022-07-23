import {
    Given,
    When,
    And,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

import registerPage from "../../pages/registerPage";

//         Given User goes to the website
Given("User goes to the website", () => {
    cy.visit("/");
});

//         And user clicks on the Menu
And("User clicks on the Menu", () => {
    cy.get(registerPage.menu).click();
});

//         And User selects the Register option
And("User selects the Register option", () => {
    cy.get(registerPage.option).click();
});

//         Then Register Page should be loaded successfully
Then("Register Page should be loaded successfully", () => {
    cy.url().should("include", registerPage.url);
});

//         When User types <name> in name input field
When("User types {string} in name input field", (name) => {
    console.log(name);
    cy.get(registerPage.name).type(name);
});

//         And User types <email> in email input field
And("User types {string} in email input field", (email) => {
    cy.get(registerPage.email).type(email);
});

//         And User types <password> in password input field
And("User types {string} in password input field", (password) => {
    cy.get(registerPage.password).type(password);
});

//         And User types <repeatPasword> in repeat password input field
And("User types {string} in repeat password input field", (repeatPassword) => {
    cy.get(registerPage.repeatPassword).type(repeatPassword);
});

//         And User clicks on Submit button
And("User clicks on Submit button", () => {
    cy.get(registerPage.submitButton).click();
});

//         Then User should be redirected to homepage
Then("User should be redirected to homepage", () => {
    cy.url().should("include", "/");
});

//         And User should be able to see the <name> on the menu

//          Then An error alert should be displayed
Then("An error alert should be displayed", () => {
    cy.on("window:alert", (t) => {
        expect(t).to.contains(registerPage.errorMessage);
    });
});
