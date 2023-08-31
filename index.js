require("dotenv").config();
const express = require("express");
const cookieSession = require("cookie-session");
const flash = require("connect-flash");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const db_connection = require("./mongodb_connection");
const PORT = process.env.PORT || 3000;

// Connect to the Database
db_connection();

// Using ejs template engine
app.set("view engine", "ejs");

// Naming current Session
app.use(cookieSession({
    secret: "user_registration",
    saveUninitialized: true,
    resave: false
}));

// Using flash to flash the messages while redirecting
app.use(flash());

// Server Static Files
app.use("/", express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
    res.locals.signup_error_message = req.flash('signup_error_message');
    res.locals.login_error_message = req.flash('login_error_message');
    res.locals.error_message = req.flash('error_message');
    next();
});

// Routes
app.use("/", require("./routes/home"));
app.use("/login", require("./routes/login"));
app.use("/signup", require("./routes/signup"));

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});