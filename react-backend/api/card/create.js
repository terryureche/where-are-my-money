import { createCard } from "./../../db/controllers/card.js";
import { restElement } from "@babel/types";

const createCardApi = async(req, res) => {
    try {
        let newCard = await createCard(req.body);

        return res.status(200).send({
            success: newCard
        });
    } catch(e) {
        return restElement.status(422).send({
            error: e.message
        });
    }
};

exports.createCardApi = createCardApi;