"use server";

const db = require("../_backend_modules/db");

export async function get_senior(first_name) {
  try {
    const query = `SELECT * FROM seniors WHERE first_name = ?`;
    const values = [first_name]
    const res = await db.query(query, values);
    return res[0];
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}
