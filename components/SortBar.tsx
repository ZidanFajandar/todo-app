interface SortBarProps {
  currentSort: string;
}

export default function SortBar({ currentSort }: SortBarProps) {
  return (
    <form>
      <label htmlFor="sort">Sort By: </label>

      <select
        id="sort"
        name="sort"
        defaultValue={currentSort}
        onChange={(e) => e.currentTarget.form?.submit()}
      >
        <option value="due_date">Due Date</option>
        <option value="topic">Topic</option>
        <option value="status">Status</option>
      </select>
    </form>
  );
}