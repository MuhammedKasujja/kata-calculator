import { beforeEach, describe, expect, test } from "vitest";
import { StringCalculator } from "../src/string-calculator";

describe("String Calculator Tests", () => {
  let calc: StringCalculator;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test("should return zero for an empty string", () => {
    expect(calc.add("")).toBe(0);
    expect(calc.add("   ")).toBe(0);
  });

  test("should return the number itself when only one number given", () => {
    expect(calc.add("1")).toBe(1);
    expect(calc.add("60")).toBe(60);
  });

  test("should return the sum of the given two numbers", () => {
    expect(calc.add("1,5")).toBe(6);
  });

  test("should return sum of multiple numbers separated by comma", () => {
    const input = "1,5,8,9,40,4";
    const expectedOutput = 67;

    expect(calc.add(input)).toBe(expectedOutput);
  });
});
