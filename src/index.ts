import fetch from "node-fetch";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchTodo(): Promise<Todo> {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch todo from ${apiUrl}`);
  }
  return response.json() as Promise<Todo>;
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

async function main() {
  try {
    const todo = await fetchTodo();
    logSuccess(todo);
  } catch (error: unknown) {
    logError(error);
  }
}

void main();

