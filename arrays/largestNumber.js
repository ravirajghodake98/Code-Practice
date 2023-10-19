//inbuilt method
function isLargest(arr) {
  return Math.max(...arr)
}

//--------------
//normal method
function isLargest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

//----------------
const number = [1, 2, 3, 4, 5, 6, 9, 8, 7]
const largest = isLargest(number);
console.log(largest);