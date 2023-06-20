const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    // res.json(users); // to send json
    res.status(200).json({
      message: "Users found",
      data: users,
    }); // to send status code and json
  } catch (error) {
    res.status(500).json({
      message: "Error while getting users",
      error: error.message,
    });
  }
};

const saveUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json({
      message: "User saved",
      data: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while saving user",
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params._id;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    res.status(200).json({
      message: "User deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while deleting user",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params._id;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "User updated",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while updating user",
      error: error.message,
    });
  }
};

module.exports = {
  getUsers,
  saveUser,
  deleteUser,
  updateUser,
};
