const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    exercisename: {
        type: String,
        required: true, 
        trim: true
    }, 
    reps: {
        type: Number ,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    date: {
        type: Date ,
        required: true
    }
}, {
    timestamps: true
})

module.export = mongoose.model('Exercise', ExerciseSchema)