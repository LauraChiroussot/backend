//Création Sauce avec mongoose V C1 P2 Ch2

const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    //_id: { type: Sring, requrired; true }, //inutile car automatique grace à
    userId: { type: String, required: true },
    manufacturer: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number},
    dislikes: { type: Number},
    usersLiked: { type: [String] },
    usersDiliked:{ type: [String] },
});

module.exports = mongoose.model('Sauce', sauceSchema);

