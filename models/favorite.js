const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    userName: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    gameId: {
        type: Number,
        required: true
    }
})



module.exports = mongoose.model('Favorite', userSchema);