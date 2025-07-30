// tests/unit/calculator.test.js
//unit test using Jest for calculator functions


const { add, subtract, multiply, divide } = require('../../function/calculator')

describe('Calculator Functions', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts two numbers correctly', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplies two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('divides two numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});

