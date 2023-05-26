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
  const todo = await response.json();
  if (!todo || typeof todo !== "object") {
    throw new Error(`Invalid todo data: ${JSON.stringify(todo)}`);
  }
  return todo as Todo;
}

function logSuccess(todo: Todo) {
  console.log("Todo fetched successfully:", todo);
}

function logError(error: unknown) {
  if (error instanceof Error) {
    console.error("Error fetching todo:", error.message);
    return;
  }
}

async function mainAsync() {
  try {
    const todo = await fetchTodoAsync();
    logSuccess(todo);
  } catch (error: unknown) {
    logError(error);
  }
}

void mainAsync();
