const express = require("express");
const router = express.Router();
const path = require("path");
const flash = require("connect-flash");

router.route("/")
    .get((req, res) => {
        res.send(req.flash("Message"));
        res.redirect(path.join(__dirname, "..", "public", "login.html"));
    });

module.exports = router;