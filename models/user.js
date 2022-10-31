const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
  //   profile: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Profile",
  //     },
  //   ],
})

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model("User", userSchema)

module.exports = User
