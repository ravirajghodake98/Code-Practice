//inbuilt method
function isPalindrome(str) {
  return str === str.split('').reverse().join('')
}

//-------------
//normal method
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }
  return true;
}

//--------------
const string = 'MALayaLAM';
const palindrome = isPalindrome(string);
console.log(palindrome);