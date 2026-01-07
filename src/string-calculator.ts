export class StringCalculator {
  add(numbers: string) {
    if (numbers.trim() === "") return 0;

    const delimiter = ",";
    const newLineDelimiter = "\n"

    if (numbers.includes(newLineDelimiter)) {
      numbers = numbers.replaceAll(newLineDelimiter, ",");
    }

    if (numbers.includes(delimiter)) {
      const nums = numbers.split(",");
      return nums.reduce(
        (previousValue, currValue) => previousValue + parseInt(currValue),
        0
      );
    }

    return parseInt(numbers);
  }
}
