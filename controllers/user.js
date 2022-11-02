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

//INDEX
router.get("/api/getreal", async (req, res) => {
  const users = await Profile.find()
  //.sort() how users will appear/ most active?/ most personality matches
  res.json(users)
})

// router.use(ensureLogin.ensureLoggedIn());

//CREATE
router.post(
  "/api/getreal/create",
  upload.single("profileImg"),
  async (req, res) => {
    console.log("REQ BODY", req.body)
    console.log(req.user.id)
    let userInfo = {
      ...req.body,
      profileImg: req.file?.path,
    }
    console.log("USERINFO", userInfo)
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
    let user = await Profile.findOneAndUpdate({ creator: req.user.id }, req.body, { new: true })
    console.log(user)
    res.json(user)
  }
)

//DELETE
router.delete("/api/getreal/delete", async (req, res) => {
  let user = await Profile.findOne({ creator: req.user.id })
  console.log(user)
  await Profile.findOneAndDelete({ creator: req.user.id })
  let deletedUser = await User.findByIdAndDelete(req.user.id)
  res.json(deletedUser)
})



//WATCHLIST
router.get('/api/getreal/watchlist', async (req, res) => {
  const userProfile = await Profile.findOne({creator: req.user.id})
  res.json(userProfile)
})


//REMOVE FROM WATCHLIST
router.put('/api/getreal/removewatchlist', async (req, res) => {
  const {id} = req.body
  const loggedInProfile = await Profile.findOne({creator: req.user.id})
  const removeMatch = loggedInProfile.watchList.filter((match) => {
    return match.toString() !== id
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
router.get("/data/:id", async (req, res) => {
  // console.log(req.params.id)
  const loggedInUser = await Profile.findOne({
    creator: mongoose.Types.ObjectId(req.params.id),
  })
  // console.log("LOGGEDINUSER", loggedInUser)
})

//MATCHES
router.put("/match", async (req, res) => {
  const findProfile = await Profile.findOne({ creator: req.user.id })
  findProfile.watchList.unshift(req.body.id)
  await findProfile.save()
  res.json(findProfile)

  // await findProfile.save()
})

//SEARCH
router.post('/api/getreal/search', async (req, res) => {
  const {searchTerm} = req.query 
  console.log(typeof searchTerm)
  const profiles = await Profile.find()
  let resultsArray = []

  for (profile of profiles) {
    if (profile.location.toLowerCase() === searchTerm.toLowerCase()) {
      resultsArray.push(profile)
      console.log(resultsArray)
    }
  }
  res.json(resultsArray)
})
//SEARCH RESULTS
// router.get()

module.exports = router
