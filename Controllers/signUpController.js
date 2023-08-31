const users = require("../model/users");

const validateUserSignUp = async (req, res) => {
    if (!req?.body?.username || !req?.body?.password) {
        req.flash("error_message", "Username and Password are required");
        return res.redirect("signup");
        return res.json({ "message": "" });
    }
    const duplicate = await users.findOne({ username: req.body.username });
    if (duplicate) {
        req.flash("signup_error_message", "Duplicate username found please try another username");
        return res.redirect("/signup");
        // return res.status(409).json({ "message": "" });
    }
    const result = await users.create({
        username: req.body.username,
        password: req.body.password
    });
    console.log(result);
    res.render("signup_successfull", { result });
};
module.exports = { validateUserSignUp };