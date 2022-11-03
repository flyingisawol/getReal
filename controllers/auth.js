const express = require("express")
const passport = require("passport")
const router = express.Router()
const User = require("../models/user")
const Profile = require("../models/profile")

const authenticate = (req, res, next) => {
  const auth = passport.authenticate("local", (err, user, info) => {
    if (err) next(err)
    if (!user) res.status(401).json({ msg: "Wrong username or password " })
    req.logIn(user, (err) => {
      if (err) next(err)
      next()
    })
  })
  auth(req, res, next)
}

// register

router.post("/api/getreal/register", async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.register(new User({ username: username }), password)
    const userProfile = await Profile.create({ creator: user })
    req.login(user, () => {
      const { username, id } = user
      res.json({ username, id })
    })
  } catch (error) {
    console.log(error)
  }
})

// login

router.post("/api/login", authenticate, (req, res) => {
  //console.log("logged in", req.user)
  const { id, username } = req.user
  res.json({ id, username })
})

router.post("/api/logout", (req, res) => {
  req.logout(() => {
    res.json({
      msg: "Logged out",
    })
  })
})

router.get("/api/loggedin-user", (req, res) => {
  if (req.user) {
    const { id, username } = req.user
    res.json({ id, username })
  } else {
    res.status(404).json({ msg: "User not logged in" })
  }
})

module.exports = router
