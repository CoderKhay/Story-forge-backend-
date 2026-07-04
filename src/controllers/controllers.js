import { pool } from "../../db.js";

const greeting = async (req, res) => {
  res.status(200).json({ message: "Welcome Kamal" });
};

const getDB = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM nodes");
    res.status(200).json(results.rows);
  } catch (err) {
    console.error("Full error:", err);
    console.error("Error causes:", err.errors);

    res.status(500).json({
      error: `${err.message}`,
      causes: err.errors?.map((e) => e.message),
    });
  }
};

export { getDB, greeting };
