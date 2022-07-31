/// <reference types="cypress" />

// [x] Verify that all of the elements are visible and working properly
// [x] Verify that the user should be able to register an account
// [ ] Verify that the system add user's data into database
// [ ] Verify that the name field should display warning message when the input has number
// [ ] Verify that the name field should display warning message when the input has special character
// [ ] Verify that an error message will show up if the user submits the form with the Name input field is empty.
// [ ] Verify that an error message will show up if the user submits the form with the Email input field is empty.
// [ ] Verify that the email field should display warning message when the email address is entered without @
// [ ] Verify that the email field should display warning message when the email address is entered without dot '.'
// [ ] Verify that the email field should display warning message when the email entered has ! # $ % ^ & * ( ) , + = / ? \ | [ ] { } ` ~ < >
// [ ] Verify that the email field should display message when the email is already existed in the system
// [ ] Verify that an error message will show up if the user submits the form with the Password input field is empty.
// [ ] Verify that an error message will show up if the user submits the form with the Repeat Password input field is empty.
// [ ] Verify that the system display message if the repeated password is not the same with the password
// [ ] Verify that the system display message if the password is too short
// [ ] Verify that the password and repeated password can be copy pasted

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

describe("Register Page", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get(registerPage.menu).click();
        cy.get(registerPage.option).click();
        cy.url().should("include", registerPage.url);
    });

    //UI Test - Happy case - should pass
    it("01 - Verify that all of the elements are visible and working properly", () => {
        cy.get(registerPage.name).should("be.visible");
        cy.get(registerPage.email).should("be.visible");
        cy.get(registerPage.password).should("be.visible");
        cy.get(registerPage.repeatPassword).should("be.visible");
        cy.get(registerPage.submitButton).should("be.visible");
    });

    //Error in command.js -
    it("02 - Register new user with valid data", () => {
        cy.fixture("register.json").then((registerForms) => {
            const registerForm = registerForms[0];
            cy.fillRegisterForm(registerPage, registerForm);
            Cypress.cy.get(registerPage.submitButton).click();
            // assert if user is redirected to homepage
            cy.url().should("include", registerPage.redirectUrl);
        });
    });

    
    it('03 - Display window alert when input is empty', () =>{
        cy.get(registerPage.submitButton).click();
        cy.on("window:alert", (text)=>{
            expect(text).to.contains("Please fill out this field.");
        })
    })


    
    it('04 - Check name validation', () => {
    });

    
    it('05 - Verify email validation', () =>{

    })

    it('06 - Verify password validation', ()=>{

    })

    //Happy case - should pass
    it.only('07 - Check warning dialog when password and repeated password are not the same', () =>{
        cy.fixture('register.json').then((registerForms)=>{
            const registerForm = registerForms[0];
            cy.fillRegisterForm(registerPage, registerForm);
            cy.get(registerPage.submitButton).click();
            cy.on('window:alert', (text)=>{
                expect(text).to.contains("wrong repeat password");
            })
        })
    })

});