"use server";

const db = require("../_backend_modules/db");

export async function add_task(data) {
  try {
    const query = `INSERT INTO tasks (type, location, date, name, number) VALUES (?, ?, ?, ?, ?)`;
    const values = [data.type, data.location, data.date, data.name, data.phone];
    await db.query(query, values);
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}
