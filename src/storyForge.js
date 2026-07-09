import express from "express";
import cors from "cors";
import { greeting, getDB } from "./controllers/controllers.js";

export const app = express();

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? [
            "https://your-frontend-live-link.vercel.app",
            "http://localhost:5173",
          ]
        : true,
  }),
);

app.get("/", greeting);
app.get("/story", getDB);
