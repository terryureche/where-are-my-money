import { createUser } from "./../../db/controllers/user.js";

const createUserApi = async(req, rest) => {
    try {
        let newUser = await createUser(req.body);
    
        return rest.status(200).send({
            success: newUser
        });
    } catch(e) {
        return rest.status(422).send({
            error: e.message
        });
    }
};

exports.createUserApi = createUserApi;