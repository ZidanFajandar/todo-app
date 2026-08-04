import { editTaskAction } from "@/app/actions";
import type { Task } from "@/lib/types";

interface EditButtonProps {
  task: Task;
}

export default function EditButton({ task }: EditButtonProps) {
  return (
    <details>
      <summary>Edit</summary>

      <form action={editTaskAction}>
        <input type="hidden" name="id" value={task.id} />
        <input type="hidden" name="archived" value={task.archived} />
        <input type="hidden" name="created_at" value={task.created_at} />

        <input name="title" defaultValue={task.title} required />

        <textarea
          name="description"
          defaultValue={task.description}
          required
        />

        <input name="topic" defaultValue={task.topic} required />

        <input
          type="date"
          name="due_date"
          defaultValue={task.due_date}
          required
        />

        <select name="status" defaultValue={task.status}>
          <option value="Todo">Todo</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Complete">Complete</option>
        </select>

        <button type="submit">Save</button>
      </form>
    </details>
  );
}