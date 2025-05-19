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
// let nums = [1, 2, 3];

// function hasDuplicate(nums) {
//   nums.sort((a, b) => a - b);
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(hasDuplicate(nums));

// brute force
// let s = "anagram";
// let t = "nagaram";

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   let sSort = s.split("").sort().join();
//   let tSort = t.split("").sort().join();
//   return sSort == tSort;
// }
// console.log(isAnagram(s, t));

// hash maps

// let s = "anagram";
// let t = "nagaram";

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const countS = {};
//   const countT = {};
//   for (let i = 0; i < s.length; i++) {
//     countS[s[i]] = (countS[s[i]] || 0) + 1;
//     countT[t[i]] = (countT[t[i]] || 0) + 1;
//   }
//   for (const key in countS) {
//     if (countS[key] !== countT[key]) {
//       return false;
//     }
//     return true;
//   }
// }
// console.log(isAnagram(s, t));

// using hash arrays

// let s = "anagram";
// let t = "nagaram";

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

// hash using map again

// let s = "anagram";
// let t = "nagaram";

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   let countS = {};
//   let countT = {};
//   for (let i = 0; i < s.length; i++) {
//     countS[s[i]] = (countS[s[i]] || 0) + 1;
//     countT[t[i]] = (countT[t[i]] || 0) + 1;
//   }
//   for (const key in countS) {
//     if (countS[key] !== countT[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isAnagram(s, t));

// hash array again
let s = "anagram";
let t = "nagaram";

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }
  return count.every((val) => val === 0);
}

console.log(isAnagram(s, t));
