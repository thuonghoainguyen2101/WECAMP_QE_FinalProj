/// <reference types="cypress" />

// const registerPage = require("../pages/registerPage");
import registerPage from "../pages/registerPage";

// describe("Register", () => {
//     beforeEach(() => {
//         cy.visit("http://localhost:3000");
//         cy.get("#hidden > li:nth-child(3) > a").click();
//         cy.get(".menu-drop > a:nth-child(1)").click();
//         cy.url().should("include", "/register");
//     });

//     it("should register a new user", () => {
//         cy.fixture("register.json").then((registerForms) => {
//             const registerForm = registerForms[0];

//             cy.get('input[name="name"]').type(registerForm.name);
//             cy.get('input[name="email"]').type(registerForm.email);
//             cy.get('input[name="password"]').type(registerForm.password);
//             cy.get('input[name="repeat password"]').type(
//                 registerForm.repeatPassword
//             );
//             cy.get("input:nth-child(5)").click();
//             // assert if user is redirected to homepage
//             cy.url().should("include", "/");
//         });
//     });

//     it("should NOT register a new user", () => {
//         cy.fixture("register.json").then((registerForms) => {
//             const registerForm = registerForms[2];

//             cy.get('input[name="name"]').type(registerForm.name);
//             cy.get('input[name="email"]').type(registerForm.email);
//             cy.get('input[name="password"]').type(registerForm.password);
//             cy.get('input[name="repeat password"]').type(
//                 registerForm.repeatPassword
//             );
//             cy.get("input:nth-child(5)").click();
//             // assert if a error alert is displayed
//             cy.on("window:alert", (t) => {
//                 expect(t).to.contains(registerForm.errorMessage);
//             });
//         });
//     });
// });

describe("Register", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get(registerPage.menu).click();
        cy.get(registerPage.option).click();
        cy.url().should("include", registerPage.url);
    });

    it("should register a new user", () => {
        cy.fixture("register.json").then((registerForms) => {
            const registerForm = registerForms[0];

            cy.get(registerPage.name).type(registerForm.name);
            cy.get(registerPage.email).type(registerForm.email);
            cy.get(registerPage.password).type(registerForm.password);
            cy.get(registerPage.repeatPassword).type(
                registerForm.repeatPassword
            );
            cy.get(registerPage.submitButton).click();
            // assert if user is redirected to homepage
            cy.url().should("include", registerPage.redirectUrl);
        });
    });

    it("should NOT register a new user", () => {
        cy.fixture("register.json").then((registerForms) => {
            const registerForm = registerForms[2];

            cy.get(registerPage.name).type(registerForm.name);
            cy.get(registerPage.email).type(registerForm.email);
            cy.get(registerPage.password).type(registerForm.password);
            cy.get(registerPage.repeatPassword).type(
                registerForm.repeatPassword
            );
            cy.get(registerPage.submitButton).click();
            // assert if a error alert is displayed
            cy.on("window:alert", (t) => {
                expect(t).to.contains(registerForm.errorMessage);
            });
        });
    });
});
