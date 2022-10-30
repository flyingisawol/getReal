// const express = require('express')
// const router = express.Router()

// // SEARCH
// router.post('/api/getreal/search', async (req, res) => {
//     const filters = req.query.Search 
//     const profiles = await User.find()
//     let resultsArray = []
//     for (profile of profiles) {
//         for (key in profile) {
//             if (Array.isArray(profile[key])) {
//                 for (propertyArrayItem of profile[key]) {
//                     console.log(propertyArrayItem)
//                     const regex = new RegExp(filters, 'i')
//                     if (regex.test(propertyArrayItem)) {
//                         if (!resultsArray.includes(profile[key])) {
//                             resultsArray.push(profile)
//                         }
//                     }
//                 }
//             } else {
//                 const regex = new RegExp(filters, 'i') //changes search form entry to case insensitive substring
//                 if (typeof profile[key] === 'string' && regex.test(profile[key])) { // tests if true and add to arry
//                     if (!resultsArray.includes(profile[key])) {
//                         resultsArray.push(profile)
//                     }

//                 }
//             }
//         }
//     } 
//     if (resultsArray.length === 0) {
//         res.render('nosearchresult.ejs') 
//     } else {
//         res.render('all.ejs', {
//         profile: resultsArray
//     })
//     }
// })

// module.exports = router