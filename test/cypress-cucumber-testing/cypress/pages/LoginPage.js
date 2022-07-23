class loginPage {
    constructor() {
        this.menu = "#hidden > li:nth-child(3) > a";
        this.option = ".menu-drop > a:nth-child(2)";
        this.url = "/login";
        this.email = "input[name='email']";
        this.password = "input[name='password']";
        this.submitButton = "input:nth-child(3)";
        this.errorMessageLabel = "h2";
        this.redirectUrl = "/";
    }

    fillEmail(email) {
        cy.get(this.email).type(email);
    }

    fillPassword(password) {
        cy.get(this.password).type(password);
    }

    clickSubmitButton() {
        cy.get(this.submitButton).click();
    }
}

module.exports = new loginPage();
