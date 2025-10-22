// Простые математические функции для тестирования
const math = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  },
  isEven: (n) => n % 2 === 0
};

describe('Math Operations - Unit Tests', () => {
  test('should add two numbers correctly', () => {
    expect(math.add(2, 3)).toBe(5);
    expect(math.add(-1, 1)).toBe(0);
    expect(math.add(0, 0)).toBe(0);
  });

  test('should subtract two numbers correctly', () => {
    expect(math.subtract(5, 3)).toBe(2);
    expect(math.subtract(0, 5)).toBe(-5);
  });

  test('should multiply two numbers correctly', () => {
    expect(math.multiply(4, 3)).toBe(12);
    expect(math.multiply(-2, 3)).toBe(-6);
  });

  test('should divide two numbers correctly', () => {
    expect(math.divide(10, 2)).toBe(5);
    expect(math.divide(7, 2)).toBe(3.5);
  });

  test('should throw error when dividing by zero', () => {
    expect(() => math.divide(5, 0)).toThrow('Division by zero');
  });

  test('should check if number is even', () => {
    expect(math.isEven(4)).toBe(true);
    expect(math.isEven(7)).toBe(false);
    expect(math.isEven(0)).toBe(true);
  });
});