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

// let arr = [1, 2, 3, 4, 5];

// let reverseArray = (arr) => {
//   let rev = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     rev.push(arr[i]);
//   }
//   return rev;
// };

// console.log(reverseArray(arr));

// revise 3 probs

// let arr = [3, 9, 2, 5, 7];

// let largestFn = (arr) => {
//   let largest = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// };

// console.log(largestFn(arr));

// 2

// let arr = [4, 1, 7, 3, 9];
// let target = 9;

// let targetFn = (arr, target) => {
//   let index = -1;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       index = i;
//     }
//   }
//   return index;
// };

// console.log(targetFn(arr,target));

// 3

// let arr = [1, 2, 3, 4, 5];

// let revFn = (arr) => {
//   let rev = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     rev.push(arr[i])
//   }
//   return rev
// };

// console.log(revFn(arr));

// practise again

// let arr = [3, 7, 1, 9, 4];

// let maxNumber = (arr) => {
//   let vader = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > vader) {
//       vader = arr[i];
//     }
//   }
//   return vader;
// };

// console.log(maxNumber(arr));

// target

// let arr = [5, 2, 10, 3];
// let target = 10;

// let targetFn = (arr, target) => {
//   let index = -1;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       index = i;
//     }
//   }
//   return index;
// };

// console.log(targetFn(arr, target));

// third

// let arr = [12, 35, 1, 10, 34, 1];

// let secondLargest = (arr) => {
//   let largest = arr[0];
//   let second = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       second = largest;
//       largest = arr[i];
//     }
//     if (arr[i] > second && arr[i] !== largest) {
//       second = arr[i];
//     }
//   }
//   return second;
// };

// console.log(secondLargest(arr));

// reverse array
// let arr = ["Hello", "World"];

// function reverseFn(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let temp = arr[left];

//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
//   }
// }

// reverseFn(arr);
// console.log(arr);

// reverse array in place

// let arr = ["h", "e", "l", "l", "o"];

// function revArray(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
//   }
//   return arr;
// }

// console.log(revArray(arr));

// reverse string

// let str = "Hello";

// function revString(str) {
//   let revStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// }

// console.log(revString(str));

// random shit
// To convert an array of [1,3,0,0,2,0] to [1,2,3,0,0,0].

let arr = [1, 3, 0, 0, 2, 0];

function sortArray(arr) {
  let nonZeroArr = arr.filter((num) => num !== 0).sort((a, b) => a - b);

  let zeroCount = arr.length - nonZeroArr.length;
  nonZeroArr.push(...Array(zeroCount).fill(0));

  return nonZeroArr;
}

console.log(sortArray(arr));
