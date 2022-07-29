// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("fillRegisterForm", (registerPage, registerForm) => {
    cy.get(registerPage.name).type(registerForm.name);
    cy.get(registerPage.email).type(registerForm.email);
    cy.get(registerPage.password).type(registerForm.password);
    cy.get(registerPage.repeatPassword).type(registerForm.repeatPassword);
    cy.get(registerPage.submitButton).click();
});

Cypress.Commands.add("fillLogin", (loginPage, loginForm) => {
    cy.get(loginPage.email).type(loginForm.email);
    cy.get(loginPage.password).type(loginForm.password);
    cy.get(loginPage.submitButton).click();
});