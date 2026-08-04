export function isOverdue(
  dueDate: string,
  status: "Todo" | "In-Progress" | "Complete",
  archived: number
): boolean {
  if (status === "Complete" || archived === 1) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);

  return due < today;
}