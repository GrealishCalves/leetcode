import fetch from "node-fetch";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchTodoAsync(): Promise<Todo> {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch todo from ${apiUrl}`);
  }
  const todo = (await response.json()) as Todo;
  if (!todo) {
    throw new Error(`Invalid todo data: ${todo}`);
  }
  return todo;
}

function logSuccess(todo: Todo): void {
  console.log("Todo fetched successfully:", todo);
}

function logError(error: unknown): void {
  if (error instanceof Error) {
    console.error("Error fetching todo:", error.message);
  }
}

async function mainAsync(): Promise<void> {
  try {
    const todo = await fetchTodoAsync();
    logSuccess(todo);
  } catch (error) {
    logError(error);
  }
}

void mainAsync();
