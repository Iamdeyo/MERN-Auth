import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc Auth user/
// @route POST api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
  return res.status(200).send('Auth User');
});

// @desc Register a new user
// @route POST api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error('user already exist');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    return res.status(201).json({
      data: user,
      message: 'user created',
    });
  }
  res.status(400);
  throw new Error('Invaild User data');
});

// @desc Logout a new user
// @route POST api/users/logout
// @access public
const logoutUser = asyncHandler(async (req, res) => {
  return res.status(200).send('Logout User');
});

// @desc Get a user profile
// @route GET api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
  return res.status(200).send('Get a User profile');
});

// @desc update a user profile
// @route PUT api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  return res.status(200).send('update a User profile');
});

export {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
};
