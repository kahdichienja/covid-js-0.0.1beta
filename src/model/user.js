import mongoose from 'mongoose'

let Schema = mongoose.Schema


let usersSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: String,
    username: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },


})


module.exports = mongoose.model('User', usersSchema)