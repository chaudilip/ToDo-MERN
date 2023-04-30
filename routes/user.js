import express from "express";
import { register ,login, getMyProfile, logout} from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/new",register);
router.post("/login",login);
router.get("/logout",logout);


//when the next() is called in isAuthenticated function then it will start the execution of the getMyProfile
router.get("/me",isAuthenticated ,getMyProfile)


export default router;