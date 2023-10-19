//inbuilt method
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

//---------------
//normal method
function countWords(str) {
  str = str.trim();
  if (str === '') return 0;

  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' && str[i + 1] !== ' ')
      count++;
  }
  return count;
}

//-----------------
const string = 'raviraj ghodake '
const final = countWords(string);
console.log(final);