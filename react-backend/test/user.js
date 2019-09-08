const userTests = (chai, expect, serverUrl) => {
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
        });
        it("return user 'rwieruch'", (done) => {
            chai.request(serverUrl)
                .get('/api/v1/user/rwieruch')
                .end((err, res) => {
                    res.status.should.be.equal(200);
                    expect(res.body).to.have.key("success");
                    expect(res.body.success).to.have.property("username");
                    expect(res.body.success.username).to.be.equal("rwieruch");
                    done();
                })
        });
        it("create new user", (done) =>  {
            let username = (Math.floor((Math.random() * 10000) + 1)).toString();
            let password = (Math.floor((Math.random() * 10000) + 1)).toString();
            let email = (Math.floor((Math.random() * 10000) + 1)).toString();

            chai.request(serverUrl)
                .post("/api/v1/user")
                .send({
                        "username": username,
                        "password": password,
                        "email": email
                })
                .end((err, res) => {
                    res.status.should.be.equal(200);
                    expect(res.body).to.have.key("success");
                    expect(res.body.success).to.have.property("username");
                    expect(res.body.success).to.have.property("password");
                    expect(res.body.success).to.have.property("email");
                    expect(res.body.success).to.have.property("_id");
                    expect(res.body.success.username).to.be.equal(username);
                    expect(res.body.success.password).to.be.equal(password);
                    expect(res.body.success.email).to.be.equal(email);
                    done();
                })
        });
        it("missing fields invalid check", (done) => {
            let username = (Math.floor((Math.random() * 10000) + 1)).toString();

            chai.request(serverUrl)
                .post("/api/v1/user")
                .send({
                        "username": username
                })
                .end((err, res) => {
                    res.status.should.be.equal(422);
                    expect(res.body).to.have.key("error");
                    expect(res.body.error).to.be.equal("User validation failed: password: Path `password` is required., email: Path `email` is required.");
                    done();
                })
        });
    }); 
}

export { userTests };