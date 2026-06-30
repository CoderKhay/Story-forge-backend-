import { pool } from "../../db.js";

const greeting = async (req, res) => {
  res.status(200).json({ message: "Welcome Kamal" });
};

const getDB = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM nodes");
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).json({ error: `${err}` });
  }
};

export { getDB, greeting };
