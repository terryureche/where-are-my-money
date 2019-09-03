import mongoose from 'mongoose';

import User from "./user.js";
import Message from "./message.js";
import Card from "./card.js";

const connectDb = () => {
    return mongoose.connect("mongodb://localhost:27017/node-express-mongodb-server");
};

const models = {
    User,
    Message,
    Card
};

export {
    connectDb
};

export default models;