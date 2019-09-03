import { createCard } from "./../../db/controllers/card.js";

const createCardApi = async(req, res) => {
    let newCard = await createCard(req.body);

    return res.status(200).send({
        success: newCard
    });
}

exports.createCardApi = createCardApi;