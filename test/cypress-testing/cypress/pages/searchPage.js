export class searchPage {
    constructor() {

        //header
        this.logo = "span > a"; 
        this.searchBar = 'input[name="search"]';
        this.searchIcon ="form > .anticon > svg"
        this.homepageOption = "#hidden > li:nth-child(1) > a";
        this.productOption = "#hidden > li:nth-child(2) > a";
        this.accountOption = "#hidden > li:nth-child(3) > a";
        this.cartOption = "#hidden > li:nth-child(4) > a";
        this.loginOption = ".menu-drop > a:nth-child(2)";
        this.registerOption = ".menu-drop > a:nth-child(1)";
        this.numOfItems =".count";
        this.message="h2";
        
        this.product=".hotsale-listproduct-product:nth-child(1) > a"
        this.buyButton=".hotsale-listproduct-product:nth-child(1) > .buy > a"
        
    }

    // clickSearchButton(){
    //     cy.get(this.searchIcon).click();
    //     return this;
    // }


}
module.exports = new searchPage();