function validateInput(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  if (arr.length === 0) {
    throw new Error('Cannot analyze an empty array');
  }
  if (!arr.every(item => typeof item === 'number' && !isNaN(item))) {
    throw new Error('Array must contain only numbers');
  }
}

function calculateAverage(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return Number((sum / arr.length).toFixed(2));
}

function analyzeArray(arr) {
  validateInput(arr);

  return {
    average: calculateAverage(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}

module.exports = analyzeArray;