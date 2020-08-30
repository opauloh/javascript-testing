const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

const sumAsync = (a, b) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(sum(a, b)), 3000);
  });

const subtractAsync = (a, b) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(subtract(a, b)), 2000);
  });

module.exports = { sum, subtract, sumAsync, subtractAsync };
