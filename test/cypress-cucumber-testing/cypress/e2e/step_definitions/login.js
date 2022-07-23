import {
    Given,
    When,
    And,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

const loginPage = require("../../pages/loginPage");

// And User selects the Login option
And("User selects the Login option", () => {
    cy.get(loginPage.option).click();
});

// Then Login Page should be loaded successfully
Then("Login Page should be loaded successfully", () => {
    cy.url().should("include", loginPage.url);
});

// When User types "<email>" in email input field of Login Page
When("User types {string} in email input field of Login Page", (email) => {
    // cy.get(loginPage.email).type(email);
    loginPage.fillEmail(email);
});

// And User types "<password>" in password input field of Login Page
And("User types {string} in password input field of Login Page", (password) => {
    // cy.get(loginPage.password).type(password);
    loginPage.fillPassword(password);
});

// And User clicks on Submit button of Login Page
And("User clicks on Submit button of Login Page", () => {
    // cy.get(loginPage.submitButton).click();
    loginPage.clickSubmitButton();
});

// Then An error message should be displayed
Then("An error message should be displayed", () => {
    cy.get(loginPage.errorMessageLabel).should("be.visible");
});
