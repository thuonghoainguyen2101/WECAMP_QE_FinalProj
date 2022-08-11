class homePage {
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
        this.numOfItems = ".count";

        //Carousel
        this.carouselLeft = ".carousel-left-slide";
        this.slickSlide = ".slick-slider";
        this.carouselRight = ".carousel-right";
        this.nextButton = "..next > .anticon > svg";
        this.prevButton = ".prev";

        //Product section

        //Footer
        this.aboutUs = ".footer-top-about > li:nth-child(1) > a";
        this.blog = ".footer-top-about > li:nth-child(2) > a";
        this.career = ".footer-top-about > li:nth-child(3) > a";
        this.store = ".footer-top-about > li:nth-child(4) > a";

        this.shippingMethods = ".footer-top-delivery > li:nth-child(1) > a";
        this.payment = ".footer-top-delivery > li:nth-child(2) > a";
        this.voucher = "footer-top-delivery > li:nth-child(3) > a";
    }

    // static clickLogo(){cy.get(this.logo).click();}
}
module.exports = new homePage();
