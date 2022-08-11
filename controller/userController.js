const User = require("../models/user");

exports.add_user = async (address) => {
  const user = await User.findOne({ account: address });
  if (!user) {
    const newUser = new User({
      account: address,
      flag: false,
    });
    await newUser.save();
  }
};

exports.get_all_user = async () => {
  const users = await User.find();
  return users;
};

exports.get_whitelist = async () => {
  const users = await User.find({ flag: true });
  return users;
};
