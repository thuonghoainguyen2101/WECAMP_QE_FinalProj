import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../dev/backend-server/index.js";

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("Test UserController API", () => {
    // -   /user/register
    test("POST /user/register", () => {});

    // -   /user/login
    test("POST /user/login", () => {
        
    });

    // -   /user/
    describe("GET /user/", () => {});

    // -   /user/delete/:id
    describe("DELETE /user/delete/:id", () => {});
});
