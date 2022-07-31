class loginPage {
    constructor(){
        this.menu = "#hidden > li:nth-child(3) > a";
        this.option = ".menu-drop > a:nth-child(2)";
        this.url = "/login";
        this.email = "input[name='email']";
        this.password = "input[name='password']";
        this.submitButton = "input:nth-child(3)";
    }
}

module.exports = new loginPage();