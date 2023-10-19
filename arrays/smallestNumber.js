//inbuilt method
function isSmallest(arr) {
  return Math.min(...arr);
}

//--------------
//normal method
function isSmallest(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > min) {
      min = arr[i];
    }
  }
  return min;
}

//-------------
const number = [1, 2, 3, 4, 5, 6, 9, 8, 7]
const smallest = isSmallest(number);
console.log(smallest);