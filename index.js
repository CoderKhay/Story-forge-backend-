import "dotenv/config";
import { app } from "./src/storyForge.js";

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`We are kickstarting story forge at port ${port}`);
});
