const mongoose = require('mongoose')



const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenght: 6,
        maxlenght: 20,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlenght: 6,
        maxlenght: 100,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlenght: 6,
        maxlenght: 20,
        trim: true
    },
    admin: {
        type: Boolean,
        default: false
    },
})




module.exports = mongoose.model('User', userSchema)