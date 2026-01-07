export class StringCalculator {
  add(numbers: string) {
    if (numbers === "") return 0;

    let delimiter = ",";

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
    // replace newline with delimiter in all occurences
    // to avoid checking for delimiter and newline at the same time
    numbers = numbers.replace(/\n/g, delimiter);

    const parsedNumbers: number[] = [];
    const negativeNumbers: number[] = [];

    for (let part of numbers.split(delimiter)) {
      if (part === "") continue;

      const num = Number(part);
      if (isNaN(num)) {
        throw new Error(`Invalid number in input: ${part}'`);
      }

      parsedNumbers.push(num);
      if (num < 0) {
        negativeNumbers.push(num);
      }
    }

    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(",")}`
      );
    }

    return parsedNumbers.reduce(
      (previousValue, currValue) => previousValue + currValue,
      0
    );
  }
}
