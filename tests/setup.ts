import fs from "fs";
import path from "path";

const testDb = path.join(process.cwd(), "database", "test.db");

if (fs.existsSync(testDb)) {
  fs.unlinkSync(testDb);
}

