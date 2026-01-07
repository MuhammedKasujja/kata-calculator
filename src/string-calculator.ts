export class StringCalculator {
  add(numbers: string) {
    if (numbers.trim() === "") return 0;

    const delimeter = ",";

    if (numbers.includes(delimeter)) {
      const nums = numbers.split(",");
      return parseInt(nums[0]) + parseInt(nums[1]);
    }

    return parseInt(numbers);
  }
}
