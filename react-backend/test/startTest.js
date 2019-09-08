import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import { userTests } from "./user.js";
import { cardTests } from "./card.js";

chai.use(chaiHttp);
chai.should();

let serverUrl = "http://localhost:3000";

userTests(chai, expect, serverUrl);
cardTests(chai, expect, serverUrl);