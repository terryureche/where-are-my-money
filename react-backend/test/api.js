

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from "../app.js";

chai.use(chaiHttp);
chai.should();

describe("Users", () => {
    it("return all users", (done) => {
        chai.request(app)
            .get('/api/v1/getAllUsers')
            .end((err, res) => {
                res.should.have(200);
                res.body.should.be("object");
                done();
            });
    })  
}); 