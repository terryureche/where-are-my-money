import { getCard,getUserAll} from "./../../db/controllers/card.js";

const getCardApi = async (req, res) => {
    let cardData = await getCard(req.params);

    return res.status(200).send({
        success: cardData
    });
};

const getCardsAllApi = async (req, res) => {
    let allCardsData = await getUserAll();

    return res.status(200).send({
        success: allCardsData
    });
};

exports.getCardApi      = getCardApi;
exports.getCardsAllApi  = getCardsAllApi;