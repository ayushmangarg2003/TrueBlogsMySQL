import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import postRouter from "./routes/posts.js";
import authRouter from "./routes/auth.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 4000;

app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  // console.log(`Listening on port ${port}`);
});
