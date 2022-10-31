const express = require("express");
const router = express.Router();
const Profile = require("../models/profile");
const Rate = require("../models/rate");
const upload = require("../middlewares/upload");
// const searchController = require('./search')
const app = express();

//INDEX
router.get("/api/getreal", async (req, res) => {
  const users = await Profile.find();
  //.sort() how users will appear/ most active?/ most personality matches
  res.json(users);
});

//SHOW
router.get(
  "/api/getreal/:id",
  upload.single("profileImg"),
  async (req, res) => {
    //let user = await Profile.findById(req.params.id).populate('author')
    let user = await Profile.findById(req.params.id);
    //AUTHORISATION HERE
    res.json(user);
  }
);

//CREATE
router.post(
  "/api/getreal/create",
  upload.single("profileImg"),
  async (req, res) => {
    let user = {
      ...req.body,
      profileImg: req.file?.path,
    };
    const userProfile = await Profile.create(user);
    res.json(userProfile);
  }
);

module.exports = router;

// code is running. results are not being filtered ??
// how do we display resultsArray? do we update state to display this?
// how do we send to front end ?
