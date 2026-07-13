const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);
const connectDB = function () {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB connected successfully.");
    })
    .catch((err) => {
      console.log(`Error in DB connection ${err}`);
    });
};

module.exports = connectDB;
