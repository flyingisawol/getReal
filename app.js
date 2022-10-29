require('dotenv').config()

const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const session = require('express-session')
const mongoDBSession = require('connect-mongodb-session')

const userController = require('./controllers/user')

const User = require('./models/user')
const Rate = require('./models/rate')
console.log(User)

<<<<<<< HEAD
=======

const app = express()
>>>>>>> 542e2e694d24f339b0bf13323f9285d836e56882
const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL
const MongoDBStore = mongoDBSession(session)
const sessionStore = new MongoDBStore({
    uri: dbURL,
    collection: 'sessions'
})

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(userController)

mongoose.connect(dbURL, () => {
    console.log('Connected to db')
})

app.listen(PORT, () => {
    console.log('Connected to server on PORT', PORT)
  })
  