import "dotenv/config";
import { app } from "./src/storyForge.js";

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`We are kickstarting story forge at port ${PORT}`);
});
