import jwt from "jsonwebtoken";
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc   Auth user & get token
// @route  POST /api/users/login
// @acces  Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // Set JWT as HTTP-Only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc   Register user
// @route  POST /api/users
// @acces  Public
export const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc   Logout user & clear cookie
// @route  POST /api/logout
// @acces  private
export const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @desc   Get user profile
// @route  GET /api/users/profile
// @acces  private
export const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc   Update user profile
// @route  PUT /api/users/profile
// @acces  private
export const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc   Get users
// @route  GET /api/users
// @acces  Private/Admiin
export const getUsers = asyncHandler(async (req, res) => {
  res.send("get user ");
});

// @desc   Delete users
// @route  DELETE /api/users/:id
// @acces  Private/Admin
export const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user ");
});

// @desc   Get user by id
// @route  GET /api/users/:id
// @acces  Private/Admin
export const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc   Update user
// @route  PUT /api/users/:id
// @acces  Private/Admin
export const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});
