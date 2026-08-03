import TaskForm from "@/components/TaskForm";
import TaskCard from "@/components/TaskCard";
import { getActiveTasks } from "@/lib/taskRepository";

export default async function Home() {
  const tasks = getActiveTasks();

  return (
    <main>
      <h1>Todo App</h1>

      <TaskForm />

      <hr />

      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))
      )}
    </main>
  );
}