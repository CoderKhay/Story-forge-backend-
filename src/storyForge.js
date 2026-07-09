import cors from "cors";
import express from "express";
import { greeting, getDB } from "./controllers/controllers.js";

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
  }),
);

export const app = express();

app.get("/", greeting);
app.get("/story", getDB);
