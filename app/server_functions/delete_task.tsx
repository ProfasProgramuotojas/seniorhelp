"use server";

const db = require("../_backend_modules/db");

export async function delete_task(id) {
  try {
    const query = `DELETE * FROM tasks WHERE id = ?`;
    await db.query(query, id);
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}
