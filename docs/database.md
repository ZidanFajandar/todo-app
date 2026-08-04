# Database Design

## Database

The application uses a single SQLite database containing one table.

## Table: Task

| Column      | Type                              | Description                                                            |
| ----------- | --------------------------------- | ---------------------------------------------------------------------- |
| id          | INTEGER PRIMARY KEY AUTOINCREMENT | Unique identifier for each task.                                       |
| title       | TEXT NOT NULL                     | Task title.                                                            |
| description | TEXT NOT NULL                     | Detailed description of the task.                                      |
| topic       | TEXT NOT NULL                     | Category or topic of the task.                                         |
| due_date    | TEXT NOT NULL                     | Due date stored in ISO date format (YYYY-MM-DD).                       |
| status      | TEXT NOT NULL                     | Task status (Todo, In-Progress or Complete).                           |
| archived    | INTEGER NOT NULL DEFAULT 0        | Indicates whether a task has been archived (0 = active, 1 = archived). |
| created_at  | TEXT NOT NULL                     | Timestamp when the task was created.                                   |
| updated_at  | TEXT NOT NULL                     | Timestamp when the task was last modified.                             |

## Relationships

The database contains a single table, so there are no relationships between tables.

## Design Rationale

A single-table design is sufficient because the application manages tasks only and does not require users, projects, or other related entities. SQLite stores all data locally, satisfying the local-first requirement while keeping the design simple.

AI Declaration: The preceding document was generated and reviewed with the assistance of ChatGPT-Web[GPT-5.5].
