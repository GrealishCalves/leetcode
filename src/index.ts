import fetch from "node-fetch";

export interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

export async function fetchDataAsync(url: string): Promise<Data> {
  const response = await fetch(url);
  if (response.ok) {
    return (await response.json()) as Data;
  } else {
    throw new Error(url);
  }
}

export function handleError(error: unknown): void {
  console.error("Error fetching data:", error as Error);
}

export async function executeAsync() {
  try {
    const data = await fetchDataAsync(apiUrl);
    console.log("Data fetched successfully:", data);
  } catch (error) {
    handleError(error);
  }
}

void executeAsync();
