const mongoose = require('mongoose');
const user = require('./user.model')

const ReviewSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Author is required'],
        minlength: 1,
        maxlength: 50,
        trim: true
    },
    stars: {
        type: Number
    },
    reviewBody: {
        type: String
    },
    movieID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = { Review };