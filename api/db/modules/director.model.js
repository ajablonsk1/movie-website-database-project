const mongoose = require('mongoose');

const DirectorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Firstname is required'],
        minlength: 1,
        maxlength: 50,
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Lastname is required'],
        minlength: 1,
        maxlength: 100,
        trim: true 
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Date of birth is required']
    },
    dateOfDeath: {
        type: Date
    },
    movieNumber: {
        type: Number
    },
    topMovies:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Movie'
            }
        ],
    description: {
        type: String,
    },
    img: {
        type: String,
    }
});

const Director = mongoose.model('Director', DirectorSchema);

module.exports = { Director };