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

// by using sorting - O(n log n)
// let nums = [1, 2, 3, 1];

// function containsDuplicate(nums) {
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(containsDuplicate(nums));

// LeetCode ques 2
// using brute force by sorting O(n log n)

// let s = "racecar";
// let t = "carrace";

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   let Ssort = s.split("").sort().join("");
//   let Tsort = t.split("").sort().join("");
//   return Ssort === Tsort;
// }

// console.log(isAnagram(s, t));

// Using hash maps (n)

// let s = "racecar";
// let t = "carrace";

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   let sCount = {};
//   let tCount = {};

//   for (let i = 0; i < s.length; i++) {
//     sCount[s[i]] = (sCount[s[i]] || 0) + 1;
//     tCount[t[i]] = (tCount[t[i]] || 0) + 1;
//   }
//   for (const key in sCount) {
//     if (sCount[key] !== tCount[key]) {
//       return false;
//     }
//   }
//   return true
// }

// console.log(isAnagram(s, t));

// using hash tables - O(n)

// let s = "racecar";
// let t = "carrace";

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const count = new Array(26).fill(0);
//   for (let i = 0; i < s.length; i++) {
//     count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
//     count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
//   }
//   return count.every((val) => val === 0);
// }

// console.log(isAnagram(s, t));
