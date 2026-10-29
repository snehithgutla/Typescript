type TaskStatus = "todo" | "in-progress" | "done";

interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

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

function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

function filterByStatus(
  tasks: Task[],
  status: TaskStatus
): Task[] {
  return tasks.filter((task) => task.status === status);
}

// Extra typed operation
function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}