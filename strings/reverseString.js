//inbuilt method
function reversedString(str) {
  return str.split('').reverse().join('');
}

//-----------------------
//normal method
function reversedString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

//---------------------
const string1 = 'raviraj';
const final = reversedString(string1);
console.log(final);