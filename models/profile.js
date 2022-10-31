const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    preferences: { type: String, requried: true },
    location: { type: String, required: true },
    profileImg: { type: String, required: true },
    galleryImg: [String],
    description: String,
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rate",
      },
    ],
    personality: [{ type: String, required: true }],
    watchList: [Object],
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
