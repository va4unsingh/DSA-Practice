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

let arr = [2, 5, 1, 9, 3];
let largest = arr[0];
let index = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
    index = i;
  }
}

console.log(`${largest}, ${index}`);
