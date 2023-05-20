import fetch from "node-fetch";

export interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

export async function executeAsync(): Promise<void> {
  try {
    const data = await fetchDataAsync(apiUrl);
    logSuccess(data);
  } catch (error) {
    if (error instanceof Error) {
      handleError(error);
    }
  }
}

async function fetchDataAsync(url: string): Promise<Data> {
  const response = await fetch(url);
  if (response.ok) {
    return (await response.json()) as Data;
  } else {
    throw new Error(url);
  }
}

function handleError(error: Error): void {
  console.error("Error fetching data:", error.message);
}
function logSuccess(todoData: Data): void {
  console.log("Data fetched successfully:", todoData);
}

void executeAsync();
