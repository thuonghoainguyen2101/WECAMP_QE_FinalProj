/// <reference  types="cypress"/>

const productDetailPage = require("../pages/productDetailPage");

const sampleProductId = "62db5fe4829132482c674502";

describe("Product Detail Page", () => {
    beforeEach(() => {
        cy.visit("/detail/" + sampleProductId);
    });

    describe("D01 - Verify the menu at header redirect user to the correct page", () => {
        it("D01 - 01 - Verify Logo on menu bar redirect user to correct page", () => {
            cy.get(productDetailPage.logo).click();
            cy.url().should("eq", Cypress.config().baseUrl + "/");
            cy.go("back");
        });

        it("D01 - 02 - Verify search icon on menu bar redirect user to correct page", () => {
            cy.get(productDetailPage.searchIcon).click();
            cy.url().should("eq", Cypress.config().baseUrl + "/search");
            cy.go("back");
        });

        it("D01 - 03 - Verify homepage option on menu bar redirect user to correct page", () => {
            cy.get(productDetailPage.homepageOption).click();
            cy.url().should("eq", Cypress.config().baseUrl + "/");
            cy.go("back");
        });

        it("D01 - 04 - Verify product option on menu bar redirect user to correct page", () => {
            cy.get(productDetailPage.productOption).click();
            cy.url().should("eq", Cypress.config().baseUrl + "/product");
            cy.go("back");
        });

        it("D01 - 05 - Verify cart option on menu bar redirect user to correct page", () => {
            cy.get(productDetailPage.cartOption).click();
            cy.url().should("eq", Cypress.config().baseUrl + "/cart");
            cy.go("back");
        });

        it("D01 - 06 - Verify account option on menu bar redirect user to correct page", () => {
            cy.get(productDetailPage.accountOption).click();
            cy.get(productDetailPage.loginOption).click();
            cy.url().should("eq", Cypress.config().baseUrl + "/login");
            cy.go("back");
        });

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
            cy.request(
                "GET",
                Cypress.config().backendUrl +
                    "/products/detail/" +
                    sampleProductId
            ).as("productDetailData");

            cy.visit("/detail/" + sampleProductId);
        });

        it("D02 - 01 - Verify product name is correct", () => {
            cy.get("@productDetailData").then((response) => {
                cy.get(productDetailPage.productName)
                    .invoke("text")
                    .should("equal", response.body.name);
            });
        });

        it("D02 - 02 - Verify product price is correct", () => {
            cy.get("@productDetailData").then((response) => {
                cy.get(productDetailPage.productPrice)
                    .invoke("text")
                    .should(
                        "equal",
                        response.body.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
                    );
            });
        });

        it("D02 - 03 - Verify product sale price is correct", () => {
            cy.get("@productDetailData").then((response) => {
                cy.get(productDetailPage.productSalePrice)
                    .invoke("text")
                    .should(
                        "equal",
                        response.body.salePrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
                    );
            });
        });

        it("D02 - 04 - Verify product image is correct", () => {
            cy.get("@productDetailData").then((response) => {
                cy.get(productDetailPage.productImage)
                    .invoke("attr", "src")
                    .should("equal", response.body.image);
            });
        });

        it("D02 - 06 - Verify product rating is correct", () => {
            cy.get("@productDetailData").then((response) => {
                cy.get(productDetailPage.productRating)
                    .invoke("text")
                    .should("equal", response.body.rating.toString());
            });
        });
    });

    describe("D03 - Verify the button 'Mua ngay' is able to click on and add the product to cart", () => {
        it("The system add product to cart when user click on Mua ngay button", () => {
            cy.get(productDetailPage.numberOfItems).then(($number) => {
                const previousCartCount = parseInt($number.text());
                cy.get(productDetailPage.buyNowButton).click({ force: true });
                cy.get(productDetailPage.numberOfItems)
                    .invoke("text")
                    .should(
                        "eq",
                        " " + (previousCartCount + 1).toString() + " "
                    );
            });
        });
    });

    describe("D04 - Verify the button 'Trả góp 0%' is able to click on and redirect user to correct page", () => {
        it("The system redirect user to correct page when user click on Trả góp 0% button", () => {
            cy.get(productDetailPage.installmentButton1).click({ force: true });
            // The new url should not equal to the current url
            cy.url().should(
                "not.eq",
                Cypress.config().baseUrl + "/detail/" + sampleProductId
            );
        });
    });

    describe("D05 - Verify the button 'Trả góp qua thẻ' is able to click on and redirect user to correct page", () => {
        it("The system redirect user to correct page when user click on Trả góp qua thẻ button", () => {
            cy.get(productDetailPage.installmentButton2).click({ force: true });
            // The new url should not equal to the current url
            cy.url().should(
                "not.eq",
                Cypress.config().baseUrl + "/detail/" + sampleProductId
            );
        });
    });

    describe("D06 - Verify the button 'Gửi đánh giá' is able to click on and trigger rating stars for user to rate", () => {});

    describe("D07 - Verify the function rating is able to send and display the feedback of user after sent", () => {});

    describe("D08 - Verify the comment box on detail page is able to type in and be sent", () => {});
});
