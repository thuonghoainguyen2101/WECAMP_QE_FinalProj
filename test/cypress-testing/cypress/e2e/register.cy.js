/// <reference types="cypress" />

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

    //Happy case should pass
    it("02 - Register new user with valid data", () => {
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

    it('04.1 - Check name validation - Blank spaces', () => {
        cy.fixture('register.json').then((registerForms) =>{
            let isAbleToRegister = false;
            let homepage = registerPage.redirectUrl;
            const registerForm = registerForms[1];
            cy.fillRegisterForm(registerPage, registerForm);
            if(homepage) isAbleToRegister = true;
            expect(isAbleToRegister).to.be.false;
            //cy.url().should("not.include", registerPage.redirectUrl);
        })
    });
    
    it('04.2 - Check name validation - Special character', () => {
        cy.fixture('register.json').then((registerForms) =>{
            let isAbleToRegister = true;
            let homepage = registerPage.redirectUrl;
            const registerForm = registerForms[2];
            cy.fillRegisterForm(registerPage, registerForm);
            
            if(homepage) isAbleToRegister = true;
            expect(isAbleToRegister).to.be.false;
            // cy.url().should("not.include", registerPage.redirectUrl);
        })
    });
    
    it('04.3 - Check name validation - Number', () => {
        cy.fixture('register.json').then((registerForms) =>{
            let isAbleToRegister = false;
            let homepage = registerPage.redirectUrl;
            const registerForm = registerForms[3];
            cy.fillRegisterForm(registerPage, registerForm);
            if(homepage) isAbleToRegister = true;
            
            expect(isAbleToRegister).to.be.false;
            //cy.url().should("not.include", registerPage.redirectUrl);
        })
    });
    
    //Happy case  - should pass
    it('05.1 - Verify email validation - Missing @', () =>{
        cy.fixture('register.json').then((registerForms) =>{
            const registerForm = registerForms[4];
            cy.fillRegisterForm(registerPage, registerForm);
            cy.on('window:alert', (text) =>{
                expect(text).to('include', 'Missing @')
            })
        })
    })

    //Happy case - should pass
    it('05.2 - Verify email validation - Missing .', () =>{
        cy.fixture('register.json').then((registerForms) =>{
            const registerForm = registerForms[5];
            cy.fillRegisterForm(registerPage, registerForm);
            cy.on('window:alert', (text) =>{
                expect(text).to('include', 'Missing .')
            })
            cy.url().should("not.include", registerPage.redirectUrl);
        })
    })

    //Happy case - should pass
    it('05.3 - Verify email validation - Special character', () =>{
        cy.fixture('register.json').then((registerForms) =>{
            const registerForm = registerForms[5];
            cy.fillRegisterForm(registerPage, registerForm);
            cy.on('window:alert', (text) =>{
                expect(text).to('have', 'Invalid email')
            })
            cy.url().should("not.include", registerPage.redirectUrl);
        })
    })

    //Happy case - should pass
    it('08 - Check warning dialog when password and repeated password are not the same', () =>{
        cy.fixture('register.json').then((registerForms)=>{
            const registerForm = registerForms[0];
            cy.fillRegisterForm(registerPage, registerForm);
            cy.get(registerPage.submitButton).click();
            cy.on('window:alert', (text)=>{
                expect(text).to.contains("wrong repeat password");
            })
        })
    })

    //Should fail
    it('09 - Verify user should not register with an existed email', () =>{
        cy.fixture('register.json').then((registerForms)=>{
            const registerForm = registerForms[0];
            cy.fillRegisterForm(registerPage, registerForm);
            cy.on('window:alert', (text) =>{
                expect(text).to.contains('The email address has already been registered');
            });
            cy.url().should("not.include", registerPage.redirectUrl);
        })
    })

    //if user able to register with email already registered
    //check if user able to login with that email adress on login.cy.js

});