const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizesSchema = new Schema({
    Title: {
        type: String
    },
    Course: {
        type: String
    },
    Topic: {
        type: String
    },
    Due: {
        type: String
    },
    Question: {
        type: String
    },
    Choices:{
        type:[String],
    },
    CorrectAnswer:{
        type: String,
        required: true,
    }


})

const quizes = mongoose.model('quiz', quizesSchema);
module.exports = quizes;