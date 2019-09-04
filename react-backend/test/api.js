

import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';

chai.use(chaiHttp);
chai.should();

let serverUrl = "http://localhost:3000";

describe("Users", (done) => {
    before(function() {
        this.timeout(10000) // 10 second timeout for setup
      })
    it("return all users", (done) => {
    chai.request(serverUrl)
            .get('/api/v1/getAllUsers')
            .end((err, res) => {
                res.status.should.be.equal(200);
                expect(res.body).to.be.an("object");
                done();
            });
    })
}); 

describe("User", (done) => {
    before(function() {
        this.timeout(1000);
    })
    it("return user rwieruch", (done) => {
        chai.request(serverUrl)
            .get('/api/v1/user/rwieruch')
            .end((err, res) => {
                res.status.should.be.equal(200);
                expect(res.body).to.have.key("success");
                expect(res.body.success).to.have.property("username");
                expect(res.body.success.username).to.be.equal("rwieruch");
                done();
            })
    })
})