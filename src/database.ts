import mysql from "mysql2/promise";

export function getConnection() {
  return mysql.createConnection({
    host: "https://www.db4free.net/",
    user: "chupalo234",
    password: "cereza23",
    port: 3306,
    database: "jasailivefr33",
  });
}
