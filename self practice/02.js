// leet code 1 - brute force - O(n2)
// let nums = [1, 2, 3,1];

// function containsDuplicate(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(containsDuplicate(nums));

// using Hash set length - O(n)

// let nums = [1, 2, 3, 1];

// function containsDuplicate(nums) {
//   return new Set(nums).size !== nums.length;
// }

// console.log(containsDuplicate(nums));

// using Hash set - O(n)

// let nums = [1, 2, 3, 1];

// function containsDuplicate(nums) {
//   const seen = new Set();
//   for (const num of nums) {
//     if (seen.has(num)) {
//       return true;
//     }
//     seen.add(num);
//   }
//   return false;
// }

// console.log(containsDuplicate(nums));
