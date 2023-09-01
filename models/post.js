const mongoose = require('mongoose');

//Schema blueprint
const postSchema = mongoose.Schema({
    //fields - data
    title: { type: String, required: true },
    content: { type: String, required: true },
    imagePath: {type: String, require: true},
    creator: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

//Definition into model

module.exports = mongoose.model('Post', postSchema);