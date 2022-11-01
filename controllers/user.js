const express = require("express")
const router = express.Router()
const ensureLogin = require("connect-ensure-login")
const app = express()
const mongoose = require('mongoose')

const Profile = require("../models/profile")
const Rate = require("../models/rate")
const User = require("../models/user")
const upload = require("../middlewares/upload")
// const searchController = require('./search')

//INDEX
router.get("/api/getreal", async (req, res) => {
  const users = await Profile.find()
  //.sort() how users will appear/ most active?/ most personality matches
  res.json(users)
})

// router.use(ensureLogin.ensureLoggedIn());



//CREATE
router.post("/api/getreal/create",upload.single("profileImg"),async (req, res) => {
  console.log('REQ BODY', req.body)
  console.log(req.user.id)
    let userInfo = {
      ...req.body,
      profileImg: req.file?.path,
    }
    console.log('USERINFO', userInfo)
    const findProfile = await Profile.findOne({creator: req.user.id})
    const updateProfile = await findProfile.update(userInfo)
    res.json(updateProfile)
  }
)

//EDIT
router.get("/api/getreal/edit/:id", async (req, res) => {
  const user = await Profile.findById(req.params.id).populate("creator")
  console.log(user)
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
router.get('/data/:id', async (req, res) => {
  console.log(req.params.id)
  const loggedInUser = await Profile.findOne({creator: mongoose.Types.ObjectId(req.params.id)})
  console.log('LOGGEDINUSER', loggedInUser)
})



//MATCHES
router.put('/match', async (req, res) => {
  const findProfile = await Profile.findOne({ creator: req.user.id})
  findProfile.watchList.unshift(req.body.id)
  await findProfile.save()
  res.json(findProfile)

  
  // await findProfile.save()
})




module.exports = router
