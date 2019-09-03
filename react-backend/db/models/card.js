import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
    type: String,
    expiration_date: {
        type: Date,
        required: true
    },
    name: {
        type: String
    },
    sn: {
        type: String,
        unique: true
    },
    is_active: Boolean,
    card_type: String,
    is_banking: Boolean,
    code1: String,
    code2: String,
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
});

const Card = mongoose.model('Card', cardSchema);

export default Card;