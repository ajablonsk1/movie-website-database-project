const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Director',
        required: [true, 'Director is required']
    },
    actors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Actor"
        }
    ],
    genre: {
        type: String
    },
    releaseDate: {
        type: Date
    },
    description: {
        type: String
    },
    img: {
        type: String
    }
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = { Movie };
