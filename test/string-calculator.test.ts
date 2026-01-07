import { describe, expect, test } from "vitest";
import { StringCalculator } from "../src/string-calculator";

describe("String Calculator Tests", () => {
  test("should return zero for an empty string", () => {
    const calc = new StringCalculator()
    expect(calc.add("")).toBe(0);
    expect(calc.add("   ")).toBe(0);
  });

  test("should return the number itself when only one number given", () => {
    const calc = new StringCalculator()
    expect(calc.add("1")).toBe(1);
    expect(calc.add("60")).toBe(60);
  });
  
  test("should return the sum of the given two numbers", () => {
    const calc = new StringCalculator()
    expect(calc.add("1,5")).toBe(6);
  });
});
