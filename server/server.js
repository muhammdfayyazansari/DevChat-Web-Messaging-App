const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = require("./config/db");
app.use(express.json());

// mongoose.set("strictQuery", false);

app.use("/", require("./routes/rootRoute"));

app.listen(PORT, () => {
  console.log("Your DevChat is running on Port No#", PORT);
});

/////////////////////// /////////////////////// Mongo Db Setup  ///////////////////////////////////////

mongoose.connect(MONGODB_URL);
/////////////////////// Monogdb connected disconnected Events ///////////////////////////////////////
mongoose.connection.on("connected", function () {
  console.log("Mongoose is connected :" , mongoose.connection.host);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mogoose is disconnected >>>>>>");
  process.exit(1);
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error ", err);
  process.exit(1);
});

process.on("SIGINT", function () {
  // This function will just be
  console.log("app is terminating ");
  mongoose.connection.lose(function () {
    console.log("Mongoose default connection closed");
    process.exit(0);
  });
});
/////////////////////// Monogdb connected disconnected Events ///////////////////////////////////////
