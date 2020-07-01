import mongoose from 'mongoose'

let Schema = mongoose.Schema


let restaurantSchema = new Schema({
    name: String, 
    /* test*/
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})


module.exports = mongoose.model('Restaurant', restaurantSchema)