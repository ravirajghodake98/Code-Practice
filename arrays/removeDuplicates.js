function removeDuplicates(arr) {
  //A Set is a data structure that only allows unique values. When you create a Set from an array, it automatically eliminates duplicates.
  //The spread operator (...) is used to convert the Set back into an array.
  return [...new Set(arr)];
}

//--------------------
function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let item of arr) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  }
  return uniqueArr;
}

//-----------------------
const array = [1, 2, 1, 1, 2, 1, 2, 3, 4, 5, 6, 'raj', 'raj', 'raviraj']
const final = removeDuplicates(array);
console.log(final);