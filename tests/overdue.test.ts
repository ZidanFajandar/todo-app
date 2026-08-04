import { describe, it, expect } from "vitest";
import { isOverdue } from "../lib/overdue";

describe("isOverdue", () => {
  it("returns true for an overdue incomplete task", () => {
    expect(isOverdue("2025-01-01", "Todo", 0)).toBe(true);
  });

  it("returns false for a completed task", () => {
    expect(isOverdue("2025-01-01", "Complete", 0)).toBe(false);
  });

  it("returns false for an archived task", () => {
    expect(isOverdue("2025-01-01", "Todo", 1)).toBe(false);
  });

  it("returns false for a future task", () => {
    expect(isOverdue("2099-12-31", "Todo", 0)).toBe(false);
  });
});