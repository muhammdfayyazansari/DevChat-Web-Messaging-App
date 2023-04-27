const express = require("express");
const router = express.Router();
const UserModel = require("./../schemaModels/UserModel");
const asyncHandler = require("express-async-handler");

module.exports.signup = asyncHandler(async (req, res) => {
  const { userName, email, mobile, password } = req.body;
  console.log("my body >>>> ", req.body);

  try {
    if (!userName || !email || !password) {
      res.status(400);
      throw new Error("Please Enter all fields");
    }
    const emailExist = await UserModel.findOne({ email });
    const numberExist = await UserModel.findOne({ mobile });
    if (emailExist) {
      res.status(400);
      throw new Error("Email Already Exist");
    }
    else if(numberExist){
      res.status(400);
      throw new Error("Mobile number is already exist")
    }

    // const result = UserModel.create({
    //   userName,
    //   mobile,
    //   email,
    //   password,
    // });
    const userRef = new UserModel({
      userName,
      mobile,
      email,
      password,
    });

    let result = await userRef.save();

    console.log("result", result);
    if (result) {
      return res.status(200).send({
        message: "doce saved",
        data: result,
      });
    } else {
      console.log("Database error", result);
      res.status(500).send({
        message: "database errror doc note saved",
      });
    }

    //   userRef.save((err, doc) => {
    //     if (!err) {
    //       return res.status(200).send({
    //         message: "doce saved",
    //         data: doc,
    //       });
    //     } else {
    //       console.log("Database error", err);
    //       res.status(500).send({
    //         message: " errror doc note saved",
    //         error: err,
    //         message: err.message,
    //       });
    //     }
    //   });
  } catch (error) {
    res.send({
      message: "something went wrong server error",
      error: error,
      errMsg: error.message,
    });
  }

  // console.log("body >>>>", req.body);
  // res.send({ userName, email, mobile, password });
});

module.exports.login = (req, res) => {
  const data = req.body;
  res.send({
    message: "this is login page",
    data: data.userName,
  });
};
