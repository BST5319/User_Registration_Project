const express = require("express");
const router = express.Router();
const path = require("path");
const signUpController = require("../Controllers/signUpController");
router.route("/")
    .get((req, res) => {
        // res.sendFile(path.join(__dirname, "..", "public", "signup.html"));
        res.render("signup");
    })
    .post(signUpController.validateUserSignUp);

module.exports = router;