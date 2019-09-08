import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: String,
    last_name: String,
    email: { 
        type: String,
        unique: true,
        required: true
    },
    card: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card"
    }]
});

userSchema.statics.findByLogin = async function (login) {
    let user = await this.findOne({
       username: login 
    });
    console.log(login)
    if(!user) {
        user = await this.findOne({
            email: login
        });
    }

    return user;
}

userSchema.pre('remove', function(next) {
    this.model('Card').deleteMany({
        user:  this._id
    }, next);
});

const User = mongoose.model('User', userSchema);

export default User;