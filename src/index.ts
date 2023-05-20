import fetch, { Response } from "node-fetch";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

export async function executeAsync(): Promise<void> {
  try {
    const todo: Todo = await fetchTodoAsync(apiUrl);
    logSuccess(todo);
  } catch (error: unknown) {
    if (error instanceof Error) {
      handleError(error);
    }
  }
}

async function fetchTodoAsync(url: string): Promise<Todo> {
  const response: Response = await fetch(url);

  if (response.ok) {
    return (await response.json()) as Todo;
  } else {
    throw new Error(url);
  }
}

function handleError(error: Error): void {
  console.error("Error fetching todo:", error.message);
}

function logSuccess(todo: Todo): void {
  console.log("Todo fetched successfully:", todo);
}

void executeAsync();
