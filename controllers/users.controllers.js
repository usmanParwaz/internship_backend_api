const UserModel = require("../models/users.models");
const CVModel = require("../models/cv.models");

const addUser = async (req, res, next) => {
  const { name, age, email, isMarried } = req.body;
  const { message, data } = await UserModel.createUser(req.body);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const findAllUsers = async (req, res, next) => {
  const { message, data } = await UserModel.getAllUsers();
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const findASingelUser = async (req, res, next) => {
  const { userId } = req.params;
  const { message, data } = await UserModel.getAUserById(userId);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const updateUser = async (req, res, next) => {
  const { userId } = req.params;
  const updateObj = req.body;
  const { message, data } = await UserModel.update(userId, updateObj);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

module.exports = {
  addUser,
  findAllUsers,
  findASingelUser,
  updateUser,
};
