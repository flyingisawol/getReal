const express = require("express")
const router = express.Router()
const ensureLogin = require("connect-ensure-login")
const app = express()
const mongoose = require("mongoose")

const Profile = require("../models/profile")
const Rate = require("../models/rate")
const User = require("../models/user")
const upload = require("../middlewares/upload")
const { remove } = require("../models/profile")
// const searchController = require('./search')

//SHOW ALL
router.get("/api/getreal/showall", async (req, res) => {
  const users = await Profile.find()
  res.json(users)
})

//INDEX
router.get('/api/getreal', async (req, res) => {
  const loggedInProfile = await Profile.findOne({creator: req.user.id})
  const loggedInLocation = loggedInProfile.location.toLowerCase()
  const allProfiles = await Profile.find()
  const sameLocation = allProfiles.filter((profile) => {
    return profile.location.toLowerCase() === loggedInLocation
  })
  res.json(sameLocation)
})

//CREATE
router.post(
  "/api/getreal/create",
  upload.single("profileImg"),
  async (req, res) => {
    let userInfo = {
      ...req.body,
      profileImg: req.file?.path,
    }
    const findProfile = await Profile.findOne({ creator: req.user.id })
    const updateProfile = await findProfile.update(userInfo)
    res.json(updateProfile)
  }
)

//EDIT
router.put(
  "/api/getreal/edit",
  upload.single("profileImg"),
  async (req, res) => {
    let userInfo = {
      ...req.body,
      profileImg: req.file?.path,
    } 
    let user = await Profile.findOneAndUpdate({ creator: req.user.id }, userInfo, { new: true })
    res.json(user)
  }
)

//DELETE
router.delete("/api/getreal/delete", async (req, res) => {
  let user = await Profile.findOne({ creator: req.user.id })
  await Profile.findOneAndDelete({ creator: req.user.id })
  let deletedUser = await User.findByIdAndDelete(req.user.id)
  res.json(deletedUser)
})

//WATCHLIST
router.get('/api/getreal/watchlist', async (req, res) => {
  const userProfile = await Profile.findOne({creator: req.user.id}).populate('watchList')
  res.json(userProfile)
})

//REMOVE FROM WATCHLIST
router.put('/api/getreal/removewatchlist', async (req, res) => {
  const {id} = req.body
  const loggedInProfile = await Profile.findOne({creator: req.user.id}).populate('watchList')
  const removeMatch = loggedInProfile.watchList.filter((match) => {
    return match.id !== id
  })
  loggedInProfile.watchList = removeMatch
  await loggedInProfile.save()
  res.json(loggedInProfile)
})

//SHOW
router.get(
  "/api/getreal/:id",
  upload.single("profileImg"),
  async (req, res) => {
    //let user = await Profile.findById(req.params.id).populate('author')
    let user = await Profile.findById(req.params.id)
    //AUTHORISATION HERE
    res.json(user)
  }
)

//DATA
router.get("/api/data/:id", async (req, res) => {
  const loggedInUser = await Profile.findOne({
    creator: mongoose.Types.ObjectId(req.params.id),
  })
})

//MATCHES
router.put("/api/match", async (req, res) => {
  const findProfile = await Profile.findOne({ creator: req.user.id })
  findProfile.watchList.unshift(req.body.id)
  await findProfile.save()
  res.json(findProfile)
})

//DATA-PERSONALITY
router.post("/api/personality", async (req, res) => {
  const findProfile = await Profile.findOne({ creator: req.user.id })
  findProfile.personality.push(...req.body)
  await findProfile.save()
  res.json(findProfile)
})

//SEARCH
router.post('/api/getreal/search', async (req, res) => {
  const {searchTerm} = req.query 
  const profiles = await Profile.find()
  let resultsArray = []

  for (profile of profiles) {
    if (profile.location.toLowerCase() === searchTerm.toLowerCase()) {
      for (item of profile.personality) {
        console.log(item)
      }
      resultsArray.push(profile)
    }
  }
  res.json(resultsArray)
})

module.exports = router