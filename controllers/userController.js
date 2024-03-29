const factoryController = require("./factoryController");
const User = require("../models/userModel");

exports.createUser = factoryController.createOne(User);
exports.getUser = factoryController.getOne(User);
exports.deleteUser = factoryController.deleteOne(User);
exports.updateUser = factoryController.updateOne(User);
exports.getAllUsers = factoryController.getAll(User);

exports.getCurrentUser = (req, res, next) => {
  res.status(200).json({ status: "success", data: { user: req.user } });
};
