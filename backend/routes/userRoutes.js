import express from "express";
const router = express.Router();
import {
  getUsers,
  getUserById,
  getUserProfile,
  updateUser,
  updateUserProfile,
  deleteUser,
  authUser,
  registerUser,
  logoutUser,
} from "../controllers/userController.js";

router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

export default router;