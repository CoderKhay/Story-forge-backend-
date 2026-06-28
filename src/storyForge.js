import express from "express";
import { getDB } from "./controllers/controllers.js";

export const app = express();

app.get("/", getDB);
