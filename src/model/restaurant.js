import mongoose from 'mongoose'

let Schema = mongoose.Schema


let restaurantSchema = new Schema({
    name: String, 
    /* test*/
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "name is required"]
    }
})


module.exports = mongoose.model('Restaurant', restaurantSchema)