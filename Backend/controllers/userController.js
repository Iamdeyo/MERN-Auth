import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc Auth user/
// @route POST api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    return res.status(200).json({
      data: user,
      message: 'user authenticated',
    });
  }
  res.status(400);
  throw new Error('Invaild User data');
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
    generateToken(res, user._id);
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
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  return res.status(200).json({ message: 'user logged out' });
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
