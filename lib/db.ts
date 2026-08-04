import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

const dbName =
  process.env.NODE_ENV === "test"
    ? "test.db"
    : "todo.db";

const dbPath = path.join(
  process.cwd(),
  "database",
  dbName
);
const schemaPath = path.join(process.cwd(), "database", "schema.sql");

// Open (or create) the database
const db = new Database(dbPath);

// Read the schema file
const schema = fs.readFileSync(schemaPath, "utf8");

// Create tables if they don't already exist
db.exec(schema);

export default db;