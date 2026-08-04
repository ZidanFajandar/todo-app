import type { Task } from "@/lib/types";
import ArchiveButton from "./ArchiveButton";
import EditButton from "./EditButton";
import { isOverdue } from "@/lib/overdue";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const overdue = isOverdue(task.due_date, task.status, task.archived);
  return (
     <div
      style={{
        border: overdue ? "2px solid red" : "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
      }}
    >
      <h2>{task.title}</h2>

      <p>
        <strong>Description:</strong> {task.description}
      </p>

      <p>
        <strong>Topic:</strong> {task.topic}
      </p>

      <p>
        <strong>Due Date:</strong> {task.due_date}
      </p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      {overdue && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          ⚠️ Overdue
        </p>
      )}

      {task.archived === 0 && <ArchiveButton id={task.id} />}
      {task.archived === 0 && <EditButton task={task} />}
    </div>
  );
}