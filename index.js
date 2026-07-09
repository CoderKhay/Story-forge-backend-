import "dotenv/config";
import cors from "cors";
import { app } from "./src/storyForge.js";

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend-live-link.vercel.app",
    ],
  }),
);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`We are kickstarting story forge at port ${port}`);
});
