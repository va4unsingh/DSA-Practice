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

// console.log(findSmallest(nums));

// Question 2
const nums1 = [15, 22, 3, 19, 8, 27];

function findSmallest1(arr) {
  let minVal1 = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minVal1) {
      minVal1 = arr[i];
    }
  }
  return minVal1;
}

// console.log(findSmallest1(nums1));

// Question 3
const nums2 = [0, -3, 14, 7, -8, 2, -1];

function findSmallest2(arr) {
  let minVal2 = null;

  for (let i = 0; i < arr.length; i++)
    if (arr[i] > 0 && (minVal2 === null || arr[i] < minVal2)) {
      minVal2 = arr[i];
    }
  return minVal2;
}

// console.log(findSmallest2(nums2));

// Question 4

const nums3 = [-10, 0, 23, 5, -4, 18, 7, 3];

function findSmallest3(arr) {
  let minVal3 = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minVal3) {
      minVal3 = arr[i];
    }
  }
  return minVal3;
}

console.log(findSmallest3(nums3));
