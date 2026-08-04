# Todo App

## Overview

This project is a local-first Todo application built using Next.js, TypeScript and SQLite. It allows users to create, edit, archive and manage tasks while storing all data locally in a SQLite database.

## Features

- Create tasks
- Edit existing tasks
- Archive tasks instead of deleting them
- View active and archived tasks
- Sort tasks by due date, topic or status
- Highlight overdue tasks
- Store all data locally using SQLite
- Automated tests using Vitest

## Technologies

- Next.js
- React
- TypeScript
- SQLite
- better-sqlite3
- Vitest

## Project Structure

```text
app/
components/
database/
docs/
lib/
tests/
```

## Requirements

- Node.js v24.18.1
- npm

## Installation

```bash
npm install
```

## Run the application

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

## Build the application

```bash
npm run build
```

## Start the production build

```bash
npm run start
```

## Run the tests

Run the full test suite:

```bash
npm run test:run
```

Run tests in watch mode:

```bash
npm test
```

## Documentation

Additional documentation is available in the `docs` directory:

- `database.md` – Database design
- `third-party.md` – Third-party libraries used
- `running.md` – Installation, execution and testing instructions

## AI Usage Declaration

This repository makes use of AI code generation using the following tools:

- ChatGPT Web [GPT-5.5]

This repository makes use of AI in-line editing using the following tools:

- GitHub Copilot [Codex-5.3]

This repository does not use AI code review.

AI Declaration: The preceding document was generated and reviewed with the assistance of ChatGPT-Web[GPT-5.5].
