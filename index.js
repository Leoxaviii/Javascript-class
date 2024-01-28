class MathUtils {
  static PI = 3.14159; // Static property

  static add(x, y) {
    return x + y; // Static method
  }

  static multiply(x, y) {
    return x * y; // Static method
  }
}

// Accessing the static property
console.log(MathUtils.PI); // Output: 3.14159

// Calling the static methods
console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.multiply(5, 3)); // Output: 15
class DescriptiveStatistics {
  static mean(numbers) {
    return numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
  }

  static standardDeviation(numbers) {
    const mean = DescriptiveStatistics.mean(numbers);
    const variance = numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / numbers.length;
    return Math.sqrt(variance);
  }
}

// Example usage
const data = [1, 2, 3, 4, 5];
console.log(DescriptiveStatistics.mean(data)); // Output: 3
console.log(DescriptiveStatistics.standardDeviation(data)); // Output: 1.4142135623730951