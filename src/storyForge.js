import express from "express";
import { getDB } from "./controllers/controllers.js";

export const app = express();

//story-forge-backend-production-1b59.up.railway.app

app.get("/story", getDB);
