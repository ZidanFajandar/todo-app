import TaskForm from "@/components/TaskForm";
import TaskCard from "@/components/TaskCard";
import SortBar from "@/components/SortBar";
import {
  getActiveTasks,
  getArchivedTasks,
} from "@/lib/taskRepository";

interface HomeProps {
  searchParams: Promise<{
    sort?: "due_date" | "topic" | "status";
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  const sort = params.sort ?? "due_date";

  const activeTasks = getActiveTasks(sort);
  const archivedTasks = getArchivedTasks();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Todo App</h1>

      <TaskForm />

      <hr />

      <SortBar currentSort={sort} />
      <h2>Active Tasks</h2>

      {activeTasks.length === 0 ? (
        <p>No active tasks.</p>
      ) : (
        activeTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      )}

      <hr />

      <h2>Archived Tasks</h2>

      {archivedTasks.length === 0 ? (
        <p>No archived tasks.</p>
      ) : (
        archivedTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      )}
    </main>
  );
}