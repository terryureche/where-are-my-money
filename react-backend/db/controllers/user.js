import models from "./../models/index.js";

const UserModel = models.User;

const createUser = async (data) => {
    let record = new UserModel({
        username: data.name
    });

    let resp = await record.save();

    return resp;
};

const getUser = async (data) => {
    let user = await UserModel.findOne({
        username: data.name
    }).exec();

    return user;
};

const getUsersAll = async (data) => {
    let users = await UserModel.find()
                                .exec();

    return users;
}

export { createUser, getUser, getUsersAll };