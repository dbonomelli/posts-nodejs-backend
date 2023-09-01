const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
//Schema blueprint
const userSchema = mongoose.Schema({
    //fields - data
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true}
});

userSchema.plugin(uniqueValidator);

//Definition into model

module.exports = mongoose.model('User', userSchema);