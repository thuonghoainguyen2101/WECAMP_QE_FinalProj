/// <reference types="cypress" />

// [x]Verify that all of the elements are visible and working properly
// []The user should be able to register an account  with valid date
// []Verify the alert dislog when input fiels are empty
// []Verify name validation
// []Verify email validation
// []Verify password validation
// [] Verify dialog alert when password and repeated password are not the same

// const registerPage = require("../pages/registerPage");
import registerPage from "../pages/registerPage";


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

    //
    it.only("02 - Register new user with valid data", () => {
        cy.fixture("register.json").then((registerForms) => {
            const registerForm = registerForms[0];
            cy.fillRegisterForm(registerPage, registerForm);
            //Cypress.cy.get(registerPage.submitButton).click();
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

    //Happy case - should pass (command error)
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