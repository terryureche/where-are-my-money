import {getUser, getUsersAll} from "./../../db/controllers/user.js";

const getUserApi = async (req, res) => {
    let userData = await getUser(req.params);

    return res.status(200).send({
        success: userData
    });
};

const getUsersAllApi = async (req, res) => {
    let allUsersData = await getUsersAll();

    return res.status(200).send({
        success: allUsersData
    });
};

exports.getUsersAllApi  = getUsersAllApi;
exports.getUserApi      = getUserApi;