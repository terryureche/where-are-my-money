import mongoose from 'mongoose';

import User from "./user.js";
import Message from "./message.js";

const connectDb = () => {
    return mongoose.connect("mongodb://localhost:27017/node-express-mongodb-server");
};

const models = {
    User,
    Message
};

export {
    connectDb
};

export default models;