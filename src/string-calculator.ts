export class StringCalculator {
  add(numbers: string) {
    if (numbers.trim() === "") return 0;

    const delimeter = ",";

    if (numbers.includes(delimeter)) {
      const nums = numbers.split(",");
      return nums.reduce(
        (previousValue, currValue) => previousValue + parseInt(currValue),
        0
      );
    }

    return parseInt(numbers);
  }
}
