import type { Task } from "@/lib/types";
import ArchiveButton from "./ArchiveButton";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
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

      {task.archived === 0 && <ArchiveButton id={task.id} />}
    </div>
  );
}