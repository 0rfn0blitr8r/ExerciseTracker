const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true, 
        trim: true
    },
    email:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.export = mongoose.model('User', UserSchema)