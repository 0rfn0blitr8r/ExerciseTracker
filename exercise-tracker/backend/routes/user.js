const router = require('express').Router()
let User = require('../models/user')

router.route("/").get( (req, res) => {
    User.find( (err, users) => {
        if(err) {
            res.status(400).json('Err' + err)
        }
        else{
            req.json(users)
        }
    } )
        
} )

router.route("/add").post( (req, res) => {
    const { username, email } = req.body
    const newUser = new User ({username, email})

    newUser.save()
        .then( () => res.json('User added') )
        .cath( err => req.status(400).json( 'Error: ' + err ) )
} )

module.exports = router