// import {
//     Given,
//     When,
//     And,
//     Then,
// } from "@badeball/cypress-cucumber-preprocessor";

// const loginPage = require("../../pages/loginPage");

// Given("A user goes to the website", () => {
//     cy.visit("/login");
// });

// When("A user enters the username {string}", (username) => {
//     loginPage.typeUsername(username);
// });

// When("A user provides incorrect credentials", (table) => {
//     table.hashes().forEach((row) => {
//         cy.log(row.username);
//         cy.log(row.password);
//         loginPage.typeUsername(row.username);
//         loginPage.typePassword(row.password);
//     });
// });

// And("A user enters the password {string}", (password) => {
//     loginPage.typePassword(password);
// });

// And("A user clicks on the login button", () => {
//     loginPage.clickLogin();
// });

// Then("the website will redirect the user back to homepage", () => {
//     cy.url().should("contains", "/");
// });

// Then("The error message {string} is displayed", (errorMessage) => {
//     loginPage.elements.errorMessage().should("have.text", errorMessage);
// });
