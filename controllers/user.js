const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Rate = require('../models/rate')
const upload = require('../middlewares/upload')
// const searchController = require('./search')
const app = express()

//INDEX 
router.get('/api/getreal', async (req, res) => {
    const users = await User.find()
    //.sort() how users will appear/ most active?/ most personality matches
    res.json(users)
})

//SHOW 
router.get('/api/getreal/:id', upload.single('profileImg'), async (req, res) => {
    //let user = await User.findById(req.params.id).populate('author')
    let user = await User.findById(req.params.id)
    //AUTHORISATION HERE
    res.json(user)
})

//CREATE
router.post('/api/getreal/create', upload.single('profileImg'), async (req, res) => {

    let user = {
        ...req.body,
        profileImg: req.file?.path,
      }
    const userProfile = await User.create(user)
    res.json(userProfile)
})

// SEARCH
// router.post('/api/getreal/search', async (req, res) => {
//     const filters = req.query.Search 
//     const profiles = await User.find()
//     let resultsArray = []
//     for (profile of profiles) {
//         for (key in profile) {
//             if (Array.isArray(profile[key])) {
//                 for (propertyArrayItem of profile[key]) {
//                     const regex = new RegExp(filters, 'i')
//                     if (regex.test(propertyArrayItem)) {
//                         if (!resultsArray.includes(profile[key])) {
//                             resultsArray.push(profile)
//                             //console.log('first log of resultsArray: ', resultsArray)
//                         }
//                     }
//                 }
//             } else {
//                 const regex = new RegExp(filters, 'i') //changes search form entry to case insensitive substring
//                 if (typeof profile[key] === 'string' && regex.test(profile[key])) { // tests if true and add to arry
//                     if (!resultsArray.includes(profile[key])) {
//                         resultsArray.push(profile)
//                         //console.log('second log of resultsArray: ', resultsArray)
//                     }
//                 }
//             }
//         }
//     } 
//     if (resultsArray.length === 0) {
//         console.log('no results found')
//     } else {
//         console.log('show all results')
//     }
// })

module.exports = router

// code is running. results are not being filtered ??
// how do we display resultsArray? do we update state to display this?
// how do we send to front end ?