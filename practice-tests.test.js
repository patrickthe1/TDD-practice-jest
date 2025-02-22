const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const caesarCipher = require('./caesarCipher');
const analyzeArray = require('./analyzeArray');


describe('capitalize', () => {
  test('capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('works with single character strings', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('does not change already capitalized strings', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('handles empty strings', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('reverseString', () => {
    test('returns the given string in reverse', () =>{
        expect(reverseString('hello')).toBe('olleh');
    });

    // Additional test cases
    test('returns an empty string when input is empty', () => {
        expect(reverseString('')).toBe('');
    });

    test('returns the same character when input is a single character', () => {
        expect(reverseString('a')).toBe('a');
    });

    test('returns the same string when input is a palindrome', () => {
        expect(reverseString('madam')).toBe('madam');
    });

    test('handles special characters correctly', () => {
        expect(reverseString('hello!')).toBe('!olleh');
    });

    test('handles long strings', () => {
        const longString = 'a'.repeat(1000);
        expect(reverseString(longString)).toBe(longString.split('').reverse().join(''));
    });
});

describe('calculator', () => {
  test('adds two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(0, 0)).toBe(0);
  });

  test('subtracts two numbers correctly', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.subtract(1, 1)).toBe(0);
    expect(calculator.subtract(0, 5)).toBe(-5);
  });

  test('multiplies two numbers correctly', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
    expect(calculator.multiply(-2, 3)).toBe(-6);
    expect(calculator.multiply(0, 5)).toBe(0);
  });

  test('divides two numbers correctly', () => {
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(5, 2)).toBe(2.5);
    expect(calculator.divide(0, 5)).toBe(0);
  });

  test('handles division by zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
  });
});

describe('caesarCipher', () => {
  test('shifts letters by the given factor', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('hello', 3)).toBe('khoor');
  });

  test('wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('z', 1)).toBe('a');
  });

  test('preserves letter case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('ZzZ', 1)).toBe('AaA');
  });

  test('keeps punctuation and spaces unchanged', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(caesarCipher('12345!@#$%', 3)).toBe('12345!@#$%');
  });

  test('handles large shift factors', () => {
    expect(caesarCipher('abc', 27)).toBe('bcd'); // 27 is equivalent to shift of 1
    expect(caesarCipher('abc', 52)).toBe('abc'); // 52 is equivalent to shift of 0
  });

  test('handles negative shift factors', () => {
    expect(caesarCipher('def', -3)).toBe('abc');
    expect(caesarCipher('abc', -27)).toBe('zab'); // -27 is equivalent to shift of -1
  });
});

describe('analyzeArray', () => {
  test('analyzes an array of numbers correctly', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });

  test('handles arrays with negative numbers', () => {
    const result = analyzeArray([-1, -5, 0, 2, 3]);
    expect(result).toEqual({
      average: -0.2,
      min: -5,
      max: 3,
      length: 5
    });
  });

  test('handles arrays with one element', () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1
    });
  });

  test('handles empty arrays', () => {
    expect(() => analyzeArray([])).toThrow('Cannot analyze an empty array');
  });

  test('handles arrays with decimal numbers', () => {
    const result = analyzeArray([1.5, 2.3, 4.7]);
    expect(result).toEqual({
      average: 2.83,  // rounded to 2 decimal places
      min: 1.5,
      max: 4.7,
      length: 3
    });
  });

  test('throws error for non-array inputs', () => {
    expect(() => analyzeArray('not an array')).toThrow('Input must be an array');
    expect(() => analyzeArray(123)).toThrow('Input must be an array');
    expect(() => analyzeArray(null)).toThrow('Input must be an array');
  });

  test('throws error for arrays with non-number elements', () => {
    expect(() => analyzeArray([1, 'two', 3])).toThrow('Array must contain only numbers');
    expect(() => analyzeArray([1, null, 3])).toThrow('Array must contain only numbers');
  });
});



