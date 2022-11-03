const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    age: { type: Number, min: 18, required: false},
    gender: { type: String, required: false },
    preferences: { type: String, required: false },
    location: { type: String, required: false },
    profileImg: { type: String, required: false },
    galleryImg: [String],
    description: String,
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rate",
      },
    ],
    personality: [{ type: String, required: false }],
    watchList: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile"
    }],
  },
  { timestamps: true }
)

const Profile = mongoose.model("Profile", profileSchema)

module.exports = Profile



