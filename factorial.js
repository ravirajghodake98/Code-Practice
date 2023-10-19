function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

//-------------------
function factorial(n) {
  if (n === 0) return 1;

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

//-------------------
const num = 9
const final = factorial(num);
console.log(final);