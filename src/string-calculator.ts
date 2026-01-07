export class StringCalculator {
  add(numbers: string) {
    if(numbers.trim() === "") return 0

    return parseInt(numbers)
  }
}
