// function sumAll(...args) {
//   return args.reduce((sum, num) => sum + num, 0);
// }

// console.log(sumAll(1, 2,10,10,10));

// 2

// let combineStrings = (...args) => {
//   let a = "";
//   for (let i = 0; i < args.length; i++) {
//     a += args[i];
//     if (i < args.length - 1) {
//       a += " ";
//     }
//   }
//   return a;
// };

// let vader = combineStrings("vader", "bhai");

// console.log(vader);

// Basic Dsa Start

// let arr = [1, 3, 7, 2, 9];
// let largest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }

// console.log(largest);

// another one question

// let arr = [2, 5, 1, 9, 3];
// let largest = arr[0];
// let index = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//     index = i;
//   }
// }

// console.log(`${largest}, ${index}`);

// another one

// let arr = [12, 35, 1, 10, 34, 1];

// let findSecondLargest = (arr) => {
//   let largest = arr[0];
//   let secondLargest = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest && num !== largest) {
//       secondLargest = num;
//     }
//   }
//   return secondLargest;
// };

// console.log(findSecondLargest(arr));

// another one

// let arr = [2, 4, 1, 7, 10];

// function largestNumber(arr) {
//   let largest = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// console.log(largestNumber(arr));

// sum an array

// let arr = [1, 2, 3, 4, 5];

// function sumOfArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumOfArray(arr));

// reverse an array

