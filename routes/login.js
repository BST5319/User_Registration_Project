const express = require("express");
const path = require("path");
const router = express.Router();
const loginController = require("../Controllers/loginController");

router.route("/")
    .get((req, res) => {
        res.render("login.ejs");
        // res.sendFile(path.join(__dirname, "..", "public", "login.html"));
    })
    .post(loginController.authenticateUser);

module.exports = router;