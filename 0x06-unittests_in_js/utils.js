// This file should contain a function named calculateNumber that accepts a type, two numbers, and returns a number.

const Utils = {
    calculateNumber(type, a, b) {
      const num1 = Math.round(a);
      const num2 = Math.round(b);
  
      if (type === 'SUM') {
        return num1 + num2;
      } else if (type === 'SUBTRACT') {
        return num1 - num2;
      } else if (type === 'DIVIDE') {
        if (num2 === 0) {
          return 'Error';
        }
        return num1 / num2;
      } else {
        return 'Invalid operation type';
      }
    }
  };
  
  module.exports = Utils;
  