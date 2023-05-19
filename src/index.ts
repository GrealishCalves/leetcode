import fetch from "node-fetch";

export interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

export async function fetchDataAsync(url: string): Promise<Data> {
  const response = (await fetch(url)) as Response;
  if (response.ok) {
    const data = (await response.json()) as Data;
    return data;
  } else {
    throw new Error(url);
  }
}

export function processData(data: Data): Data {
  return data;
}

export function handleError(error: unknown): void {
  console.error("Error fetching data:", error as Error);
}

export async function executeAsync() {
  try {
    const data: Data = await fetchDataAsync(apiUrl);
    const processedData: Data = processData(data);
    console.log("Data fetched successfully:", processedData);
  } catch (error) {
    handleError(error);
  }
}

void executeAsync();
