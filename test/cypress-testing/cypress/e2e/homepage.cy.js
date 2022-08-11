// cy.visit('http://localhost:3000/');
// cy.get('.anticon-left > svg').click();
// cy.get('.anticon-right > svg').click();
// cy.get('.slick-active img').click();
// cy.get('.carousel-right-item:nth-child(1) > img').click();
// cy.get('.carousel-right-item:nth-child(2) > img').click();
// cy.get('.carousel-right-item:nth-child(3) > img').click();
// cy.get('.slick-active:nth-child(5) > div > div').click();
// cy.get('.slick-active:nth-child(6) > div > div').click();
// cy.get('.slick-active:nth-child(7) > div > div').click();
// cy.get('.slick-active:nth-child(8) > div > div').click();
// cy.get('.slick-active:nth-child(9) > div > div').click();
// cy.get('.carousel-left-bottom .slick-slide:nth-child(10) > div > div').click();
// cy.get('.slick-active:nth-child(6) > div > div').click();
// cy.get('#hotsale\ iphone .hotsale-listproduct-product:nth-child(1) > .buy > a').click();
// cy.get('.footer-top-about li:nth-child(1) > a').click();
// cy.get('.footer-top-about li:nth-child(2) > a').click();
// cy.get('.footer-top-about li:nth-child(3) > a').click();
// cy.get('.footer-top-about li:nth-child(4) > a').click();
// cy.get('.footer-top-delivery li:nth-child(4) > a').click();
// cy.get('.footer-top-delivery li:nth-child(3) > a').click();
// cy.get('.footer-top-delivery li:nth-child(2) > a').click();
// cy.get('.footer-top-delivery li:nth-child(1) > a').click();
// cy.get('li img').click();
// cy.get('.anticon-up > svg').click();

describe("Homepage", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    xit("Verify that all of the elements are visible and working properly");

    xit(
        "Verify that all the text – logo, product, category name, price, and product description are clearly visible."
    );

    xit("Verify that all the images – product and banner are clearly visible.");

    xit("Verify that the search box has properly placeholder and icon");

    xit("Verify that the system should redirect user to the search page");

    xit("Verify that the Logo should redirect user to home page");

    xit('Verify that the "Trang Chủ" should redirect user to Home page');

    xit('Verify that the "Sản phẩm" should direct user to product page');

    xit(
        'Verify that the "Tài khoản" display 2 options "Đăng kí" and "Đăng nhập"'
    );

    xit(
        'Verify that the system should redirect user to register page when user selects "Đăng kí"'
    );

    xit(
        'Verify that the system should redirect user to login page when user selects "Đăng nhập"'
    );

    xit("Verify that the Cart icon will redirect user to cart page");

    xit("Verify that the Cart icon will display number of items in the cart");

    xit("Verify the image carousel is auto scolling");

    xit(
        "Verify the carousel is able to scroll to next image when it is hovered"
    );

    xit(
        "Verify the carousel is able to render the same way in different browsers and different screen resolutions"
    );

    xit("Verify the carousel <, > is displayed correctly when it is hovered");

    xit("Verify the carousel <,> changes the slide correctly");

    xit("Verify the carousel is able to click on and go to the correct page");

    xit("Verify the content of carousel display clearly");

    xit(
        "Verify that all the products in Homepage are redirecting to the correct product."
    );

    xit(
        'Verify that the "Mua Ngay" button can add the corresponding product to user\'s cart with the quantity is 1.'
    );
});
