import { describe, it, expect } from "vitest";
import { createTask, getActiveTasks } from "../lib/taskRepository";

describe("createTask", () => {
  it("creates a new task", () => {
    createTask({
      title: "Test Task",
      description: "Testing task creation",
      topic: "Testing",
      due_date: "2099-12-31",
      status: "Todo",
    });

    const tasks = getActiveTasks();

    expect(tasks.length).toBeGreaterThan(0);

    const task = tasks.find((t) => t.title === "Test Task");

    expect(task).toBeDefined();
    expect(task?.description).toBe("Testing task creation");
    expect(task?.topic).toBe("Testing");
    expect(task?.status).toBe("Todo");
  });
});