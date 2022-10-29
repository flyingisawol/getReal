const mongoose = require('mongoose')


const rateSchema = new mongoose.Schema({
    author: { type: String, required: true },
    comment: String,
    rating: { type: Number, min: 1, max: 5, required: true }
})

const Rate = mongoose.model('Rate', rateSchema)

module.exports = Rate