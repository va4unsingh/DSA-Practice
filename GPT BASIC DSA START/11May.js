// let arr = [10, [20, 30], [40, [50, 60]], 70];

// function fn(n, i) {
//   return n * i;
// }

// function transform(arr, fn) {
//   let res = [];
//   let index = 0;

//   function flat(num) {
//     for (let i = 0; i < num.length; i++) {
//       if (Array.isArray(num[i])) {
//         flat(num[i]);
//       } else {
//         res.push(fn(num[i], index));
//         index++;
//       }
//     }
//   }

//   flat(arr);
//   return res;
// }

// console.log(transform(arr, fn));

// by auto

// let arr = [10, [20, 30], [40, [50, 60]], 70];

// function fn(n, i) {
//   return n * i;
// }

// function vader(arr, fn) {
//   let flat = arr.flat(Infinity);
//   return flat.map((value, index) => fn(value, index));
// }

// console.log(vader(arr, fn));

// new

// let nums = [1, 2, 3, 4];
// let init = 0;
// function sum(accum, curr) {
//   return accum + curr;
// }

// function vader(nums, sum, init) {
//   let res = init;

//   for (let i = 0; i < nums.length; i++) {
//     res = sum(res, nums[i]);
//   }
//   return res;
// }

// console.log(vader(nums, sum, init));

// new 2
