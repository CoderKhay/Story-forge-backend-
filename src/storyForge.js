import express from "express";
import { greeting, getDB } from "./controllers/controllers.js";

export const app = express();

app.get("/", greeting);
app.get("/story", getDB);
