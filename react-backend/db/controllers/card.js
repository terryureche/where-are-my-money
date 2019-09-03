import models from "./../models/index.js";

const CardModel = models.Card;
const UserModel = models.User;

const createCard = async (data) => {
    let record = new CardModel({
        type: data.type,
        expiration_date: data.expiration_date,
        name: data.name,
        sn: data.sn,
        is_active: data.is_active,
        card_type: data.card_type,
        is_banking: data.is_banking,
        code1: data.code1,
        code2: data.code2,
    });

    let user = await UserModel.findOne({
        _id: data.userId
    });

    record.user.push(user);

    let resp = await record.save();

    return resp;
};

const getCard = async (data) => {
    let card = await CardModel.findOne({
        name: data.name
    }).exec();

    return card;
};

const getUserAll = async (data) => {
    let cards = await CardModel.find()
                               .exec();

    return cards;
};

export {
    createCard,
    getCard,
    getUserAll
};