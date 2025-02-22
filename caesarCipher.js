// Helper function to normalize shift factor to be between 0 and 25
function normalizeShift(shift) {
  // Handle negative shifts and large numbers
  shift = shift % 26;
  if (shift < 0) shift += 26;
  return shift;
}

// Helper function to shift a single character
function shiftChar(char, shift) {
  // Get ASCII codes for lowercase and uppercase boundaries
  const isUpperCase = char >= 'A' && char <= 'Z';
  const isLowerCase = char >= 'a' && char <= 'z';
  
  if (!isUpperCase && !isLowerCase) return char;
  
  const baseCode = isUpperCase ? 65 : 97; // ASCII for 'A' or 'a'
  const charCode = char.charCodeAt(0);
  
  // Apply shift and wrap around if necessary
  let shiftedCode = ((charCode - baseCode + shift) % 26) + baseCode;
  return String.fromCharCode(shiftedCode);
}

function caesarCipher(str, shift) {
  shift = normalizeShift(shift);
  return str.split('').map(char => shiftChar(char, shift)).join('');
}

module.exports = caesarCipher; 