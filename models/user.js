const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  account: {
    type: String,
    required: true,
  },
  flag: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
