//Création utilasateur unique V1 C1 P3 Ch2

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');//évite que deux utilisateurs partagent la même adresse V1 C1 P3 CH2

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },//permet d'avoir un seul utilisateur
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);