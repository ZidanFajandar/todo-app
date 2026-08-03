import db from "./db";

export interface Task {
  id?: number;
  title: string;
  description: string;
  topic: string;
  due_date: string;
  status: "Todo" | "In-Progress" | "Complete";
  archived?: number;
  created_at?: string;
  updated_at?: string;
}

export function createTask(task: Task) {
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