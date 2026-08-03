"use client";

import { createTaskAction } from "@/app/actions";

export default function TaskForm() {
  return (
    <form action={createTaskAction}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          required
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          name="description"
          required
        />
      </div>

      <div>
        <label>Topic</label>
        <input
          type="text"
          name="topic"
          required
        />
      </div>

      <div>
        <label>Due Date</label>
        <input
          type="date"
          name="due_date"
          required
        />
      </div>

      <div>
        <label>Status</label>
        <select
          name="status"
          defaultValue="Todo"
        >
          <option value="Todo">Todo</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Complete">Complete</option>
        </select>
      </div>

      <button type="submit">
        Create Task
      </button>
    </form>
  );
}