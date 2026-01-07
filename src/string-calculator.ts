export class StringCalculator {
  add(numbers: string) {
    if (numbers.trim() === "") return 0;

    let delimiter = ",";
    const newLineDelimiter = "\n";

    // allow custom delimiter
    if (numbers.startsWith("//")) {
      // Get the new line delimiter to find the string delimiter
      //  since it always infront of the delimiter
      const newlineIndex = numbers.indexOf("\n");

      if (newlineIndex === -1) {
        throw new Error("Expected to find a newline after delimiter ");
      }

      delimiter = numbers.slice(2, newlineIndex);

      if (delimiter.length === 0) {
        throw new Error("Expected to find delimiter before newline");
      }

      numbers = numbers.slice(newlineIndex + 1);
    }

    if (numbers.includes(newLineDelimiter)) {
      numbers = numbers.replaceAll(newLineDelimiter, delimiter);
    }

    if (numbers.includes(delimiter)) {
      const nums = numbers.split(delimiter);
      return nums.reduce(
        (previousValue, currValue) => previousValue + parseInt(currValue),
        0
      );
    }

    return parseInt(numbers);
  }
}
