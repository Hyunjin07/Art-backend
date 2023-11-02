const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const paintingSchema = new Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    author:{type: String, required: true},
    creator:{type:mongoose.Types.ObjectId, required:true, ref:'User'}
});

module.exports = mongoose.model('Painting', paintingSchema);

