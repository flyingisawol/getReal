const mongoose = require('mongoose')

const User = require('../models/user.js')
const seedData = require('../seed/seed.js')

const dbURL = 'mongodb://localhost:27017/getreal'

mongoose.connect(dbURL, async () => {
  console.log('Connected to db')
  try {
    console.log('Inserting user seed data')
    await User.create(seedData)
    console.log('Added seed data')
  } catch (err) {
    console.log("ERROR:", err.message)
  }
  mongoose.connection.close()
})