import {
    Given,
    When,
    And,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

import registerPage from "../../pages/registerPage";

Before(() => {
    //Code to delete customer if it exists
    cy.request({
        method: "DELETE",
        url: "http://localhost:3000/user/delete",
        failOnStatusCode: false,
    });
});

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

//         When User types <name> in name input field of Register Page
When("User types {string} in name input field of Register Page", (name) => {
    console.log(name);
    // cy.get(registerPage.name).type(name);
    registerPage.fillName(name);
});

//         And User types <email> in email input field of Register Page
And("User types {string} in email input field of Register Page", (email) => {
    // cy.get(registerPage.email).type(email);
    registerPage.fillEmail(email);
});

//         And User types <password> in password input field of Register Page
And(
    "User types {string} in password input field of Register Page",
    (password) => {
        // cy.get(registerPage.password).type(password);
        registerPage.fillPassword(password);
    }
);

//         And User types <repeatPasword> in repeat password input field of Register Page
And(
    "User types {string} in repeat password input field of Register Page",
    (repeatPassword) => {
        // cy.get(registerPage.repeatPassword).type(repeatPassword);
        registerPage.fillRepeatPassword(repeatPassword);
    }
);

//         And User clicks on Submit button of Register Page
And("User clicks on Submit button of Register Page", () => {
    // cy.get(registerPage.submitButton).click();
    registerPage.clickSubmitButton();
});

//         Then User should be redirected to homepage
Then("User should be redirected to homepage", () => {
    cy.url().should("include", "/");
});

//         And User should be able to see the <name> on the menu

//         Then An error alert should be displayed
Then("An error alert should be displayed", () => {
    // cy.on("window:alert", (t) => {
    //     // expect(t).to.contains(registerPage.errorMessage);
    //     expect(t).should("be.visible");
    // });

    cy.on("");
});

//         User fills the form of Register Page with the following data
When(
    "User fills the form of Register Page with the following data",
    (dataTable) => {
        registerPage.fillForm(dataTable.hashes()[0]);
    }
);
