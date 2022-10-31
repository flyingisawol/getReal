const express = require("express")
const router = express.Router()
const ensureLogin = require("connect-ensure-login")
const app = express()

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
router.post(
  "/api/getreal/create",
  upload.single("profileImg"),
  async (req, res) => {
    let user = {
      ...req.body,
      profileImg: req.file?.path,
    }
    const userProfile = await Profile.create(user)
    res.json(userProfile)
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

module.exports = router
