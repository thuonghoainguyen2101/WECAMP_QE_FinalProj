/// <reference  types="cypress"/>

import loginPage from '../pages/loginPage'


describe('Login Page', ()=>{

    beforeEach(() =>{
        cy.visit('/');
        cy.get(loginPage.menu).click();
        cy.get(loginPage.option).click();
    })

    //Should fail
    it('01 - Login Page has Forgot password function', () =>{
        cy.get('body').find("Forget Password");
        cy.wait(5000);
    }); 

    // //Happy case - should pass - Cái này cũng chưa biết làm luôn
    // it.only('02 - Input box should have properly placeholder', () =>{
    //     cy.get(loginPage.email).its('placeholder').should('contain', 'Email');
    // })

    //Happy case - should pass
    it('03 - Login with valid email and valid password', () =>{
        cy.fixture('login.json').then((loginData) =>{
            const loginInfo = loginData[0];
            cy.fillLogin(loginPage, loginInfo);
            cy.url().should("include", "/");
        })
    })

    //Happy case - should pass
    it('04 - Login with invalid email and valid password', () =>{
        cy.fixture('login.json').then((loginData) =>{
            const loginInfo = loginData[1];
            cy.fillLogin(loginPage, loginInfo);
            cy.get('h2').should('contain', 'invalid email or password');
        })
    })

    //Happy case - should pass
    it('05 - Login with valid email and invalid password', () =>{
        cy.fixture('login.json').then((loginData) =>{
            const loginInfo = loginData[2];
            cy.fillLogin(loginPage, loginInfo);
            cy.get('h2').should('contain', 'invalid email or password');
        })
    })

    //Happy case - should pass
    it('06 - Popup warning dialog when input field is empty', () =>{
        cy.get(loginPage.submitButton).click();
        cy.on('window:alert', (text)=>{
                expect(text).to.contains('Please fill out this field')
            });
    })

    // //Khó quá chưa biết làm - do a research later
    // it('07 - System should not take user to logout mode when user successfully login and click on back button', ()=>{
    //     cy.fixture('login.json').then((loginData) =>{
    //         const loginInfo = loginData[0];
    //         cy.fillLogin(loginPage, loginInfo);
    //         cy.get()
    //     });
    // })

    // //Khó quá chưa biết làm - do a research later
    // it('08 - System should not take user tp logout mode when close window and reopen', ()=>{

    // })

    //
    it('09 - Verify "Tạo tài khoản" redirect user to register page', () =>{
        cy.get('a').click();
    })

})