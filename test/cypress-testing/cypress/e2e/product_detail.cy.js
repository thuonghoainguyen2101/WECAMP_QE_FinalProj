/// <reference  types="cypress"/>

const productDetailPage = require("../pages/productDetailPage");

const sampleProductId = "62db5fe4829132482c674502";

describe("Product Detail Page", () => {
    beforeEach(() => {
        cy.visit("/detail/" + sampleProductId);
    });

    // D01	Verify the menu at header redirect user to the correct page
    // D02	Verify the detail page display correct product
    // D03	Verify the button "Mua ngay" is able to click on and add the product to cart
    // D04	Verify the button "Trả góp 0%" is able to click on and redirect user to correct page
    // D05	Verify the button "Trả góp qua thẻ" is able to click on and redirect user to correct page
    // D06	Verify the button "Gửi đánh giá" is able to click on and trigger rating stars for user to rate
    // D07	Verify the function rating is able to send and display the feedback of user after sent
    // D08	Verify the comment box on detail page is able to type in and be sent

    describe("D01 - Verify the menu at header redirect user to the correct page", () => {
        it("D01 - 01 - Verify Logo on menu bar redirect user to correct page", () => {
            cy.get(productDetailPage.logo).click();
            cy.url().should("eq", Cypress.config().baseUrl + "/");
            cy.go("back");
        }),
            it("D01 - 02 - Verify search icon on menu bar redirect user to correct page", () => {
                cy.get(productDetailPage.searchIcon).click();
                cy.url().should("eq", Cypress.config().baseUrl + "/search");
                cy.go("back");
            }),
            it("D01 - 03 - Verify homepage option on menu bar redirect user to correct page", () => {
                cy.get(productDetailPage.homepageOption).click();
                cy.url().should("eq", Cypress.config().baseUrl + "/");
                cy.go("back");
            }),
            it("D01 - 04 - Verify product option on menu bar redirect user to correct page", () => {
                cy.get(productDetailPage.productOption).click();
                cy.url().should("eq", Cypress.config().baseUrl + "/product");
                cy.go("back");
            }),
            it("D01 - 05 - Verify cart option on menu bar redirect user to correct page", () => {
                cy.get(productDetailPage.cartOption).click();
                cy.url().should("eq", Cypress.config().baseUrl + "/cart");
                cy.go("back");
            }),
            it("D01 - 06 - Verify account option on menu bar redirect user to correct page", () => {
                cy.get(productDetailPage.accountOption).click();
                cy.get(productDetailPage.loginOption).click();
                cy.url().should("eq", Cypress.config().baseUrl + "/login");
                cy.go("back");
            }),
            it("D01 - 07 - Verify register option on menu bar redirect user to correct page", () => {
                cy.get(productDetailPage.accountOption).click();
                cy.get(productDetailPage.registerOption).click();
                cy.url().should("eq", Cypress.config().baseUrl + "/register");
                cy.go("back");
            });
    });

    describe("D02 - Verify the detail page display correct product", () => {
        beforeEach(() => {
            // Call the Api to get the Product Detail Information
            cy.request("GET", "http://localhost:5000/products/detail/" + sampleProductId) as productDetail;
            cy.visit("/detail/" + sampleProductId);
        }),

            it("D02 - 01 - Verify product name is correct", () => {
                cy.get(productDetailPage.productName).should("have.text", 
            })


})
