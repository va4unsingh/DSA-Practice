// function countdown(i) {
//   console.log(i);
//   countdown(i - 1);
// }

// ⚠️ Warning: this will crash quickly with a “Maximum call stack size exceeded” error
// countdown(10);

// let i = 5;
// while (true) {
//   console.log(i);
//   i--;
// }

// function countdown(i) {
//   console.log(i);
//   if (i <= 1) return; // base case
//   countdown(i - 1); // recursive call
// }

// Start the countdown
// countdown(3);

// Output:
// 3
// 2
// 1

// function fact(x) {
//   if (x === 1) return 1;
//   else {
//     return x * fact(x - 1);
//   }
// }

// console.log(fact(5));

// let arr = [1, 2, 3, 4];

// function vader(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(vader(arr));

// same but by recursion by slicing

// function vader(arr) {
//   if (arr.length === 0) return 0;

//   return arr[0] + vader(arr.slice(1));
// }

// let arr = [1, 2, 3, 4];
// console.log(vader(arr)); // 10

// let array = [1, 2, 3, 4, 5];

// function sum(array) {
//   let vader = 0;
//   for (let i = 0; i < array.length; i++) {
//     vader += array[i];
//   }
//   return vader;
// }

// console.log(sum(array));

// now using recursion

// let array = [1, 2, 3, 4, 5];

// function sum(array) {
//   if (array.length === 0) return 0;
//   else {
//     return array[0] + sum(array.slice(1));
//   }
// }

// console.log(sum(array));

// now using recursion count number in array
// let array = [1, 2, 3, 4, 5];

// function countNum(array) {
//   if (array.length === 0) return 0;
//   else {
//     return 1 + countNum(array.slice(1));
//   }
// }

// console.log(countNum(array));

// now using loop
// let array = [1, 2, 3, 4, 5];

// function countNum(array) {
//   let counter = 0;
//   for (let i = 0; i < array.length; i++) {
//     counter++; // or counter = counter + 1
//   }
//   return counter;
// }

// console.log(countNum(array));

//  Write a recursive function to find the maximum number in a list.

// let array = [1, 2, 3, 4, 5, 10334, 200, 500];

// function maxNum(array) {
//   if (array.length === 1) return array[0];
//   else {
//     return Math.max(array[0], maxNum(array.slice(1)));
//   }
// }

// console.log(maxNum(array));

// without math max
// let array = [1, 2, 3, 4, 5, 10334, 200, 500];

// function maxNum(array) {
//   if (array.length === 1) return array[0];

//   const restMax = maxNum(array.slice(1));
//   if (array[0] > restMax) {
//     return array[0];
//   } else {
//     return restMax;
//   }
// }

// console.log(maxNum(array));

// using loop
// let array = [1, 2, 3, 4, 5, 10334, 200, 500];

// function maxNum(array) {
//   let start = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > start) {
//       start = array[i];
//     }
//   }
//   return start;
// }

// console.log(maxNum(array));

// binary search using recursive function

// const array = [1, 3, 5, 7, 9, 11];
// const target = 7;

// function binarySearch(array, target, low, high) {
//   if (low === undefined) low = 0;
//   if (high === undefined) high = array.length - 1;

//   if (low > high) {
//     return -1;
//   }

//   const mid = Math.floor((low + high) / 2);

//   if (array[mid] === target) {
//     return mid;
//   } else if (target > array[mid]) {
//     return binarySearch(array, target, mid + 1, high);
//   } else {
//     return binarySearch(array, target, low, mid - 1);
//   }
// }

// console.log(binarySearch(array, target));

//demo
// let array = [10];
// function quickShort(array) {
//   if (array.length === 0) return "Pagal aur number de";
//   if (array.length === 1) return array[0];
// }

// console.log(quickShort(array));

// 2 Element in Array

let array = [32, 30];
function quickShort(array) {
  if (array.length === 0) return "Pagal aur number de";
  if (array.length === 1) return array[0];
  else{
    
  }
}

console.log(quickShort(array));
