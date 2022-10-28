const mongoose = require('mongoose')


const rateSchema = new mongoose.Schema({
    comment: String,
    rating: { type: Number, required: true },
})

const Rate = mongoose.model('Rate', rateSchema)

module.exports = Rate