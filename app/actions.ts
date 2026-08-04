"use server";

import { revalidatePath } from "next/cache";
import { createTask, archiveTask } from "@/lib/taskRepository";

export async function createTaskAction(formData: FormData) {
  const title = formData.get("title")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const topic = formData.get("topic")?.toString().trim();
  const due_date = formData.get("due_date")?.toString();
  const status = formData.get("status")?.toString();

  if (!title || !description || !topic || !due_date || !status) {
    throw new Error("All fields are required.");
  }

  createTask({
    title,
    description,
    topic,
    due_date,
    status: status as "Todo" | "In-Progress" | "Complete",
  });

  revalidatePath("/");
}

export async function archiveTaskAction(formData: FormData) {
  const id = Number(formData.get("id"));

  archiveTask(id);

  revalidatePath("/");
}