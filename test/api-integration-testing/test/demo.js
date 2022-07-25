import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../dev/backend-server/index.js";

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("Test all API", () => {
    // -   /user/register
    describe("Test user API", () => {
        it("should register a new user", (done) => {
            chai.request(server)
                .post("/api/user/register")
                .send({
                    name: "Nguyen Van A",
                    email: "email@gmail.com",
                    password: "123456",
                    repeatPassword: "123456",
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("msg");
                    res.body.msg.should.be.a("string");
                    res.body.msg.should.equal("Register success");
                    done();
                });
        });
    });
});

// -   /user/login
// -   /user/
// -   /user/delete/:id
