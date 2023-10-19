function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

const num = 9
const final = factorial(num);
console.log(final);
