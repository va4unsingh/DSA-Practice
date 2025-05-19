// let nums = [1, 2, 3, 3];
// let nums = [1, 2, 3];

// function containsDuplicate(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let element = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === element) {
//         return true;
//       }
//     }
//   }

//   return false;
// }
// console.log(containsDuplicate(nums));

// O(n2);

// using set

// let nums = [1, 2, 3];

// function containsDuplicate(nums) {
//   return new Set(nums).size !== nums.length;
// }

// O(n);

// using sorting
let nums = [1, 2, 3];

function hasDuplicate(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
}
