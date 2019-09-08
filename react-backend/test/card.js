const cardTests = (chai, expect, serverUrl) => {
    describe("Cards", (done) => {
        before(function() {
            this.timeout(10000) // 10 second timeout for setup
        })
        it("return all cards", (done) => {
        chai.request(serverUrl)
                .get('/api/v1/getAllCards')
                .end((err, res) => {
                    res.status.should.be.equal(200);
                    expect(res.body).to.be.an("object");
                    expect(res.body.success).to.be.an("array");
                    done();
                });
        });
        it("return card 'Union'", (done) => {
            chai.request(serverUrl)
                .get('/api/v1/card/Union')
                .end((err, res) => {
                    res.status.should.be.equal(200);
                    expect(res.body).to.have.key("success");
                    expect(res.body.success).to.have.property("name");
                    expect(res.body.success.name).to.be.equal("Union");
                    done();
                })
        });
        it("create new card", (done) =>  {
            let expirationDate = new Date(+(new Date()) - Math.floor(Math.random()*9999999999)).toISOString();
            let sn = (Math.floor((Math.random() * 10000) + 1)).toString();
            let name = (Math.floor((Math.random() * 10000) + 1)).toString();
            let userId = "5d754a5f25cb580ce5fbd000";

            chai.request(serverUrl)
                .post("/api/v1/card")
                .send({
                        "expiration_date": expirationDate,
                        "sn": sn,
                        "name": name,
                        "userId" : userId
                })
                .end((err, res) => {
                    res.status.should.be.equal(200);
                    expect(res.body).to.have.key("success");
                    expect(res.body.success).to.have.property("name");
                    expect(res.body.success).to.have.property("expiration_date");
                    expect(res.body.success).to.have.property("sn");
                    expect(res.body.success).to.have.property("_id");
                    expect(res.body.success.name).to.be.equal(name);
                    expect(res.body.success.expiration_date).to.be.equal(expirationDate);
                    expect(res.body.success.sn).to.be.equal(sn);
                    done();
                })
        });
        // it("missing fields invalid check", (done) => {
        //     let username = (Math.floor((Math.random() * 10000) + 1)).toString();

        //     chai.request(serverUrl)
        //         .post("/api/v1/user")
        //         .send({
        //                 "username": username
        //         })
        //         .end((err, res) => {
        //             res.status.should.be.equal(422);
        //             expect(res.body).to.have.key("error");
        //             expect(res.body.error).to.be.equal("User validation failed: password: Path `password` is required., email: Path `email` is required.");
        //             done();
        //         })
        // });
    }); 
}

export { cardTests };