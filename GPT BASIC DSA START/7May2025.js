// given array write a function that returns the smallest number in the array
const nums = [4, 7, 1, 9, 3];

function findSmallest(arr) {
  // assume the first element is the smallest
  let minVal = arr[0];

  for (let i = 0; i < arr.length; i++) {
    // check if current number is smaller
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }
  return minVal;
}

console.log(findSmallest(nums));
