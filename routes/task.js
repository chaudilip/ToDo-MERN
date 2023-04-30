import express from "express";
import {
  deleteTask,
  getMyTask,
  newTask,
  updateTask,
} from "../controllers/task.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

//getting user from isAuthenticated function where we define the req.user
router.post("/new", isAuthenticated, newTask);
router.get("/my", isAuthenticated, getMyTask);
router
  .route("/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);
export default router;
