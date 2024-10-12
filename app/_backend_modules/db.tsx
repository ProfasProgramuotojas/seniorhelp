import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_Name,
});

export async function query(sql: string, params: (number | string)[]) {
  try {
    const connection = await db.getConnection();

    try {
      const [rows] = await connection.query(sql, params);
      return JSON.parse(JSON.stringify(rows));
    } finally {
      connection.release();
    }
  } catch (error) {
    console.log(error);
  }
}
