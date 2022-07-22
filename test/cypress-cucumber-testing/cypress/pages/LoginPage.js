class loginPage {
    elements = {
        usernameInput: () => cy.get("input[name='email']"),
        passwordInput: () => cy.get("input[name='password']"),
        loginBtn: () => cy.get("input[type='submit']"),
        errorMessage: () => cy.get("h2"),
    };

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }
}

module.exports = new loginPage();
