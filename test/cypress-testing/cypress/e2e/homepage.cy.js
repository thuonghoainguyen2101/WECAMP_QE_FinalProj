/// <reference types="cypress" />

const homepagePage = require("../pages/homepagePage");


describe("Homepage", () => {
    beforeEach(() => {
        cy.visit("/");
    });


    //Happy case - should pass
    it.only('01 - Verify Logo on menu bar redirect user to correct page', () =>{

              
        cy.get(homepagePage.logo).click();
        cy.url().should("include", "/");
        cy.go('back');

        cy.get(homepagePage.searchIcon).click();
        cy.url().should("include", "/search");
        cy.go('back');

        cy.get(homepagePage.homepageOption).click();
        cy.url().should("include", "/");
        cy.go('back');

        cy.get(homepagePage.productOption).click();
        cy.url().should("include", "/product");
        cy.go('back');

        cy.get(homepagePage.cartOption).click();
        cy.url().should("include", "/cart");
        cy.go('back');

        cy.get(homepagePage.accountOption).click();
        cy.get(homepagePage.loginOption).click();
        cy.url().should("include", "/login");
        cy.go('back');

        cy.get(homepagePage.accountOption).click();
        cy.get(homepagePage.registerOption).click();
        cy.url().should("include", "/register");
        cy.go('back');
    });

    
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
