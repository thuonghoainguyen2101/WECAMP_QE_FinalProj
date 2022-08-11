/// <reference types="cypress"/>

import searchPage from '../pages/searchPage'

// function randomInt(max) {return Math.floor(Math.random() * max);}

describe('Search Page', () =>{
    beforeEach(() =>{
        cy.visit('/');
    });

    //Happy case - should pass
    it('01 - Display message when product not found', () =>{
        cy.get(searchPage.searchBar).type('Q');
        cy.get(searchPage.searchIcon).click();
        cy.get(searchPage.message).should('contain', 'ko tim thay sp');
    })

    //Happy case - should pass
    it('02.1 - Product listed on page able to redirect to detail', () =>{
        cy.get(searchPage.searchBar).type('A');
        cy.get(searchPage.searchIcon).click();
        cy.get(searchPage.product).click();
        cy.url().should('include', '/detail');
        //this test pass
        //it able to redirect user to the detail page
        //but the detail page for iphone 12 promax is not successfully loaded -> app crash
    })

    //Happy case - should pass
    //This case is the same as above but with different product
    it('02.2- Product listed on page able to redirect to detail', () =>{
        //let index = randomInt()
        cy.get(searchPage.searchBar).type('Iphone');
        cy.get(searchPage.searchIcon).click();
        cy.get(searchPage.product).click();
        cy.url().should('include', '/detail');
    })

    //Happy case - should pass
    //But fail because it is a bug 
    it('03 - "Mua ngay" button is able to add product to cart', () =>{
        cy.get(searchPage.searchBar).type('Samsung');
        cy.get(searchPage.searchIcon).click();
        cy.get(searchPage.buyButton).click();
        cy.url().should('not.include','/cart');
        cy.get(searchPage.numOfItems).should.equal(1);
    })

    //Happy case - should pass 
    //But fail because it is a bug
    it('04 - Verify the searched products listed still display after a series of actions', () =>{
        cy.get(searchPage.searchBar).type('Iphone');
        cy.get(searchPage.searchIcon).click();
        cy.get(searchPage.product).click();
        cy.go('back');
        cy.get('.hotsale-listproduct').should('be.visible');
    })

    it('05 - The header at search page is able to redirect to correct location', () =>{
        cy.get(searchPage.logo).click();
        cy.url().should("include", "/");
        cy.go('back');

        cy.get(searchPage.homepageOption).click();
        cy.url().should("include", "/");
        cy.go('back');

        cy.get(searchPage.productOption).click();
        cy.url().should("include", "/product");
        cy.go('back');

        cy.get(searchPage.cartOption).click();
        cy.url().should("include", "/cart");
        cy.go('back');

        cy.get(searchPage.accountOption).click();
        cy.get(searchPage.loginOption).click();
        cy.url().should("include", "/login");
        cy.go('back');

        cy.get(searchPage.accountOption).click();
        cy.get(searchPage.registerOption).click();
        cy.url().should("include", "/register");
        cy.go('back');
    })

})