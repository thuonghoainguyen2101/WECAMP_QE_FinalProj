/// <reference types="cypress" />

// [ ] Verify that all of the elements are visible and working properly
// [ ] Verify that all the text – logo, product, category name, price, and product description are clearly visible.
// [ ] Verify that all the images – product and banner are clearly visible.
// [ ] Verify that the search box has properly placeholder and icon
// [ ] Verify that the system should redirect user to the search page
// [ ] Verify that the Logo should redirect user to home page
// [ ] Verify that the "Trang Chủ" should redirect user to Home page
// [ ] Verify that the "Sản phẩm" should direct user to product page
// [ ] Verify that the "Tài khoản" display 2 options "Đăng kí" and "Đăng nhập"
// [ ] Verfiy that the system should redirect user to register page when user selects "Đăng kí"
// [ ] Verfiy that the system should redirect user to login page when user selects "Đăng nhập"
// [ ] Verify that the Cart icon will redirect user to cart page
// [ ] Verify that the Cart icon will display number of items in the cart
// [ ] Verify the image carousel is auto scolling
// [ ] Verify the carousel is able to scroll to next image when it is hovered
// [ ] Verify the carousel able to render the same way in different browsers and different screen resolutions
// [ ] Verify the carousel <, > is displayed correctly when it is hovered
// [ ] Verify the carousel <,> changes the slide correctly
// [ ] Verify the carousel is able to click on and go to the correct page
// [ ] Verify the content of carousel display clearly

// [ ] Verify that all the products in Homepage are redirecting to the correct product.
// [ ] Verify that the "Mua Ngay" button can add the corresponding product to user's cart with the quantity is 1.

describe("Homepage", () => {
    beforeEach(() => {
        cy.visit("/");
    });


    //Happy case - should pass
    it.only('01 - Verify Logo on menu bar redirect user to correct page', () =>{

              
        cy.get(homepagePage.logo).click();
        cy.url().should("include", "/");
        cy.go('back');

    xit("Verify that the system should redirect user to the search page");

    xit("Verify that the Logo should redirect user to home page");

    xit('Verify that the "Trang Chủ" should redirect user to Home page');

    xit('Verify that the "Sản phẩm" should direct user to product page');

    xit(
        'Verify that the "Tài khoản" display 2 options "Đăng kí" and "Đăng nhập"'
    );

    
    it('02 - Verify the Cart Icon display number of items in cart and "Mua ngay" button', () =>{
        //Visit page
        //Scroll to view product
        //Click on "Mua ngay" button on a product randomly
        //Check cart icon if product is added

    });

    
    it.only('03 - Prev and Next buttons on crousel display when mouse hover', () =>{
        cy.get(homepagePage.carouselLeft).trigger('mouseover');
        cy.get(homepagePage.nextButton).should('be.visible');
    })

    
    it('04 - Change images correctly', () =>{
        //Visit page
        //hover mouse over carousel -> button display
        //click on button to change images

    })

    it('05 - Redirect to product\'s detail page', () =>{
        //Visit page 
        //Scroll to product and click on product image
        
    })

    //User should not able to see chat icon when in anonymous mode
    it('06 - Verify user in anonymous mode', () =>{

    })

});
