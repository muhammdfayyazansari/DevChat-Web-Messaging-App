const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    picture: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    mobile: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    tokens: {
      type: Array,
    },
    // createdOn: {
    //   type: Date,
    //   default: Date.now,
    // },
  }, 
  { timestamps: true }
);
UserSchema.pre("save", function () {
  const user = this;
  // console.log(" user of this ", this);
  const salt = bcrypt.genSaltSync(12);
  const hashPass = bcrypt.hashSync(user.password, salt);
  user.password = hashPass;
  // console.log("user of this after encryption >>>>", user);
});

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;
