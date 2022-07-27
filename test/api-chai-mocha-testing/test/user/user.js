import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../dev/backend-server/index.js";

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("Test User API", () => {
    // -   /user/register
    describe("POST /user/register", () => {});

    // -   /user/login
    describe("POST /user/login", () => {});

    // -   /user/
    describe("GET /user/", () => {});

    // -   /user/delete/:id
    describe("DELETE /user/delete/:id", () => {});
});
