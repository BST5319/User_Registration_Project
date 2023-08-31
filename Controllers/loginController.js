const users = require("../model/users");
const path = require("path");
const flash = require("connect-flash");

const authenticateUser = async (req, res) => {
    if (!req?.body?.username || !req?.body?.password) {
        req.flash("error_message", "Error : Username and Password are required");
        return res.redirect("/login");
    }
    let data = {
        username: req.body.username,
        password: req.body.password
    };

    const result = await users.findOne({ username: data.username, password: data.password }).exec();
    if (!result) {
        req.flash("login_error_message", "Error: Invalid username or password");
        return res.redirect("/login");
    }
    else {
        res.render("login_successfull", { data });
    }
};

module.exports = { authenticateUser };