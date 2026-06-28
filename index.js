import "dotenv/config";
import { app } from "./src/storyForge.js";

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`We are kickstarting story forge at port ${PORT}`);
});
