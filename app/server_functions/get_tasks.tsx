"use server";

const db = require("../_backend_modules/db");

export async function get_tasks() {
  try {
    const query = `SELECT * FROM tasks`;
    const res = await db.query(query);
    return res;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}
