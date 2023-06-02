import { properties } from "./data";

function formatPropertiesRecursively(properties: Record<string, any>): Record<string, any> {
  const formattedProps: Record<string, any> = {};

  for (const key of Object.keys(properties)) {
    const value = properties[key];

    if (value.properties) {
      formattedProps[key] = {
        ...value,
        properties: formatPropertiesRecursively(value.properties),
      };
    } else {
      formattedProps[key] = `{{${key}}}`;
    }
  }

  return formattedProps;
}

function formatPropertiesRecursively2(properties: Record<string, any>): Record<string, any> {
  const formattedProps: Record<string, any> = {};

  for (const [key, value] of Object.entries(properties)) {
    if (value.properties) {
      formattedProps[key] = {
        ...value,
        properties: formatPropertiesRecursively(value.properties),
      };
    } else {
      formattedProps[key] = `{{${key}}}`;
    }
  }

  return formattedProps;
}

// console.log(JSON.stringify(formatPropertiesRecursively(properties), null, 2));

// Measure execution time of formatPropertiesRecursively
const start1 = performance.now();
const result1 = formatPropertiesRecursively(properties);
const end1 = performance.now();
const executionTime1 = end1 - start1;

// Measure execution time of formatPropertiesRecursively2
const start2 = performance.now();
const result2 = formatPropertiesRecursively2(properties);
const end2 = performance.now();
const executionTime2 = end2 - start2;

// Output the results and execution times
console.log("Execution time 1:", executionTime1, "ms");

console.log("Execution time 2:", executionTime2, "ms");
