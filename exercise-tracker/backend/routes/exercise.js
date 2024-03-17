const router = require('express').Router()
const Exercise = require('../models/exercise')

router.route('/').get( (req, res) => {
    Exercise.find()
        .then( exercise => res.json(exercise) )
        .catch( err => req.status(400).json( 'Error: ' + err ) )
} )

router.route('/add').post( (req, res) => {
    const { username, exercisename, reps, sets, date } = req.body
    const newExercise = new Exercise({
        username, 
        exercisename, 
        reps, 
        sets, 
        date
    })

    newExercise.save()
        .then( () => res.json('Exercise Added') )
        .catch( (err) => res.status(400).json('Error: ' + err) )
} )

module.exports = router