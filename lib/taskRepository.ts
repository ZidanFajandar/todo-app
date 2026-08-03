import db from "./db";
import type { Task, NewTask } from "./types";



export function createTask(task: NewTask) {
  const stmt = db.prepare(`
    INSERT INTO Task
      (title, description, topic, due_date, status, archived, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const now = new Date().toISOString();

  return stmt.run(
    task.title,
    task.description,
    task.topic,
    task.due_date,
    task.status,
    0,
    now,
    now
  );
}

export function getActiveTasks(): Task[] {
  const stmt = db.prepare(`
    SELECT *
    FROM Task
    WHERE archived = 0
    ORDER BY due_date ASC
  `);

  return stmt.all() as Task[];
}