const { default: mongoose } = require("mongoose");
const User = require("../schemas/users.schema");

const createUser = async (requestBodyData) => {
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    name: requestBodyData.name,
    age: requestBodyData.age,
    email: requestBodyData.email,
    isMarried: requestBodyData.isMarried,
  });

  const createdUser = await user.save();
  return {
    message: "SUCCESS",
    data: createdUser,
  };
};

const getAllUsers = async () => {
  const users = await User.find();
  return {
    message: "SUCCESS",
    data: users,
  };
};

const getAUserById = async (userId) => {
  const user = await User.findOne({ _id: userId });
  return {
    message: "SUCCESS",
    data: user,
  };
};

const update = async (userId, updateObj) => {
  const updatedUser = await User.findByIdAndUpdate(userId, updateObj);
  return {
    message: "SUCCESS",
    data: updatedUser,
  };
};

module.exports = {
  createUser,
  getAllUsers,
  getAUserById,
  update,
};
