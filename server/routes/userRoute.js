const express = require("express");
const router = express.Router();
const {signup, login} = require("./../controllers/userControllers")


router.post("/signup", signup);
router.post("/login", login);
// router.get("/logout", verifyToken, userLogOut);
// router.post("/profileUpdate/:id", profileUpdate);



module.exports = router;