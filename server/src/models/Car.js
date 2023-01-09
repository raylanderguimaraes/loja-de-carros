const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    model: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    
})



module.exports = mongoose.model("Car", CarSchema);