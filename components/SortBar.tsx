interface SortBarProps {
  currentSort: string;
}

export default function SortBar({ currentSort }: SortBarProps) {
  return (
    <form method="GET">
      <label htmlFor="sort">Sort By: </label>

      <select id="sort" name="sort" defaultValue={currentSort}>
        <option value="due_date">Due Date</option>
        <option value="topic">Topic</option>
        <option value="status">Status</option>
      </select>

      <button type="submit">Sort</button>
    </form>
  );
}