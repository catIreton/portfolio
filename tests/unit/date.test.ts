import { describe, it, expect, vi, afterEach } from "vitest";
import { getCurrentYear } from "../../src/utils/date";

describe("getCurrentYear", () => {
  afterEach(() => vi.useRealTimers());

  it("returns the current year", () => {
    expect(getCurrentYear()).toBe(new Date().getFullYear());
  });

  it("returns a four-digit year", () => {
    const year = getCurrentYear();
    expect(year).toBeGreaterThan(2000);
    expect(year).toBeLessThan(3000);
  });

  it("reflects a mocked date", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2030-06-15"));
    expect(getCurrentYear()).toBe(2030);
  });
});
