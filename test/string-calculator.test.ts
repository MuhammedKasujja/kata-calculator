import { describe, expect, test } from "vitest";
import { StringCalculator } from "../src/string-calculator";

describe("String Calculator Tests", () => {
  test("should return zero for an empty string", () => {
    const calc = new StringCalculator()
    expect(calc.add("")).toBe(0);
    expect(calc.add("   ")).toBe(0);
  });
});
