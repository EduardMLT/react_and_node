const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name for user"],
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
        },     
    token: {
      type: String,
      default: null,
    },
    avatar: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
      default: null,
    },
    confirmationOfVerification: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);