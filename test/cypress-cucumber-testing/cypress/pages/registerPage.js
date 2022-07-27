class registerPage {
    constructor() {
        this.menu = "#hidden > li:nth-child(3) > a";
        this.option = ".menu-drop > a:nth-child(1)";
        this.url = "/register";
        this.name = "input[name='name']";
        this.email = "input[name='email']";
        this.password = "input[name='password']";
        this.repeatPassword = "input[name='repeat password']";
        this.submitButton = "input:nth-child(5)";
        this.redirectUrl = "/";
    }

    fillName(name) {
        cy.get(this.name).type(name);
    }

    fillEmail(email) {
        cy.get(this.email).type(email);
    }

    fillPassword(password) {
        cy.get(this.password).type(password);
    }

    fillRepeatPassword(repeatPassword) {
        cy.get(this.repeatPassword).type(repeatPassword);
    }

    clickSubmitButton() {
        cy.get(this.submitButton).click();
    }

    fillForm(registerForm) {
        cy.get(this.name).type(registerForm.name);
        cy.get(this.email).type(registerForm.email);
        cy.get(this.password).type(registerForm.password);
        cy.get(this.repeatPassword).type(registerForm.repeatPassword);
        cy.get(this.submitButton).click();
    }
}

module.exports = new registerPage();
