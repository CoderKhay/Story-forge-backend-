import express from "express";
import cors from "cors";
import { greeting, getDB } from "./controllers/controllers.js";

export const app = express();

app.use(cors());

app.get("/", greeting);
app.get("/story", getDB);
