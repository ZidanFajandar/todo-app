export interface NewTask {
  title: string;
  description: string;
  topic: string;
  due_date: string;
  status: "Todo" | "In-Progress" | "Complete";
}

export interface Task extends NewTask {
  id: number;
  archived: number;
  created_at: string;
  updated_at: string;
}