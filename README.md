# LeetCode Challenges with TypeScript

This project is a collection of solutions to LeetCode challenges written in TypeScript. It's aimed for personal use to practice and solve coding challenges.

## About the Project

This project is organized with a focus on keeping each problem's solution in its separate directory within the `src/answers` folder. Each of these directories contains an `index.ts` file which holds the TypeScript solution for a specific LeetCode problem.

## Running the Solutions

To run a specific solution, the project includes a script called `start:dev`. This script requires a parameter specifying the folder which contains the solution you want to run.

For example, if you want to run the solution in the `src/answers/089` folder, use the following command:

```sh
npm run start:dev --problem=089
```

Replace `089` with the respective folder name you want to target.

This command will execute the `index.ts` file within the specified folder.

## Project Structure

- `src/`: Directory for source code.
  - `answers/`: Directory containing solutions to LeetCode problems, each in its own subdirectory.
- `.eslintrc.cjs`: ESLint configuration file.
- `.gitignore`: Specifies which files and directories to ignore in Git.
- `.prettierrc.json`: Prettier configuration file.
- `package.json`: File containing metadata and scripts for the project.
- `tsconfig.json`: TypeScript configuration file.
