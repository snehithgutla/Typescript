// Restrict task status to the three supported workflow stages.
type TaskStatus = "todo" | "in-progress" | "done";

// Shared data contract used by every task operation.
interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// Return a new array; choose an ID above every existing task ID.
function addTask(tasks: Task[], title: string): Task[] {
  const nextId = tasks.reduce(
    (maxId, task) => Math.max(maxId, task.id),
    0
  ) + 1;

  const newTask: Task = {
    id: nextId,
    title,
    status: "todo"
  };

  return [...tasks, newTask];
}

// Complete the matching task without changing the original task objects.
function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

// Only supported TaskStatus values can be passed to this function.
function filterByStatus(
  tasks: Task[],
  status: TaskStatus
): Task[] {
  return tasks.filter((task) => task.status === status);
}

// Extra typed operation: remove a task without mutating the input array.
function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}
