require("dotenv").config();

const mongoose = require("mongoose");

const db_connection = async () => {
    await mongoose.connect(process.env.DB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => {
        console.log("Connected");
    }).catch(() => {
        console.log("Failed to connect");
    });
};

module.exports = db_connection;