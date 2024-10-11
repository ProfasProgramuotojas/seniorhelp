"use server";

const db = require("../_backend_modules/db");

export async function add_senior(data) {
  try {
    const query = `INSERT INTO seniors (first_name, last_name, location) VALUES (?, ?, ?)`;
    const values = [data.first_name, data.last_name, data.location];
    const res = await db.query(query, values);
    return res;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}
