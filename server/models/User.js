const mongoose = require("mongoose");
let userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    tokenVersion: {
      type: Number,
      default: 0,
    },
  },
  { collection: "authorization" }
);

var Users = mongoose.model("User", userSchema);
module.exports = { Users };
