class ProductDetailPage {
    constructor() {
        //header
        this.logo = "span > a";
        this.searchBar = ".search";
        this.searchIcon = "form > .anticon > svg";
        this.homepageOption = "#hidden > li:nth-child(1) > a";
        this.productOption = "#hidden > li:nth-child(2) > a";
        this.accountOption = "#hidden > li:nth-child(3) > a";
        this.cartOption = "#hidden > li:nth-child(4) > a";
        this.loginOption = ".menu-drop > a:nth-child(2)";
        this.registerOption = ".menu-drop > a:nth-child(1)";
        this.numberOfItems = ".count";

        //product information
        this.productName = "h2";
        this.productPrice = ".price";
        this.productSalePrice = ".saleprice";
        this.productImage = "img";
        this.productRating = ".star-average-num";

        //product action
        this.buyNowButton = ".detail-info-right-buy-now > a";
        this.installmentButton1 =
            ".detail-info-right-buy-installment > :nth-child(1)";
        this.installmentButton2 =
            ".detail-info-right-buy-installment > :nth-child(2)";
    }
}

module.exports = new ProductDetailPage();
