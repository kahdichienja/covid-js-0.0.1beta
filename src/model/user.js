import mongoose from 'mongoose'

let Schema = mongoose.Schema


let usersSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Firstname is required"]
    },
    lastname: String,
    username: String,
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true
    },


})


module.exports = mongoose.model('User', usersSchema)