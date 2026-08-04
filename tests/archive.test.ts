import { describe, it, expect } from "vitest";
import {
  createTask,
  archiveTask,
  getActiveTasks,
  getArchivedTasks,
} from "../lib/taskRepository";

describe("archiveTask", () => {
  it("archives an existing task", () => {
    createTask({
      title: "Archive Test",
      description: "Archive me",
      topic: "Testing",
      due_date: "2099-12-31",
      status: "Todo",
    });

    const activeTasks = getActiveTasks();

    const task = activeTasks.find((t) => t.title === "Archive Test");

    expect(task).toBeDefined();

    archiveTask(task!.id);

    const activeAfter = getActiveTasks();
    const archived = getArchivedTasks();

    expect(activeAfter.find((t) => t.id === task!.id)).toBeUndefined();
    expect(archived.find((t) => t.id === task!.id)).toBeDefined();
  });
});