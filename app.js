import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.js";
import cors from "cors";

export const app = express();
const router = express.Router();

config({
  path:"./data/config.env",
})

//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:[process.env.FRONTEND_URL],
  credentials:true, //credentials for sending headers to frontend like cookies and session
}));

//using Routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);


app.get("/", (req, res) => {
  res.send("Working fine");
});

app.use(errorMiddleware);


