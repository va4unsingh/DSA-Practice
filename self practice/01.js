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

// new ques O(n2) nested loop kinda
// let nums = [2, 7, 11, 15];
// let target = 9;

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(twoSum(nums, target));

// O(n)
// let nums = [2, 7, 11, 15];
// let target = 9;

// function twoSum(nums, target) {
//   let map = {};

//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if (map.hasOwnProperty(complement)) {
//       return [map[complement], i];
//     }
//     map[nums[i]] = i;
//   }
// }

// console.log(twoSum(nums, target));

// sorting

// let nums = [2, 7, 11, 15];
// let target = 9;

// function twoSum(nums, target) {
//   let A = [];
//   for (let i = 0; i < nums.length; i++) {
//     A.push([nums[i], i]);
//   }
//   A.sort((a, b) => a[0] - b[0]);
//   let i = 0,
//     j = nums.length - 1;
//   while (i < j) {
//     let curr = A[i][0] + A[j][0];
//     if (curr === target) {
//       return [Math.min(A[i][1], A[j][1]), Math.max(A[i][1], A[j][1])];
//     } else if (curr < target) {
//       i++;
//     } else {
//       j--;
//     }
//   }
//   return [];
// }

// console.log(twoSum(nums, target));

// two pointers

// let nums = [2, 7, 11, 15];
// let target = 9;

// function twoSum(nums, target) {
//   // 1. Pair values with original indices
//   const arr = nums.map((val, idx) => [val, idx]);

//   // 2. Sort by value
//   arr.sort((a, b) => a[0] - b[0]);

//   // 3. Two pointers
//   let l = 0,
//     r = arr.length - 1;
//   while (l < r) {
//     const sum = arr[l][0] + arr[r][0];
//     if (sum === target) {
//       // 4. Return original indices
//       return [arr[l][1], arr[r][1]];
//     } else if (sum < target) {
//       l++;
//     } else r--;
//   }
// }

// console.log(twoSum(nums, target));

// neetcode hashmap(two pass)

// let nums = [2, 7, 11, 15];
// let target = 9;

// function twoSum(nums, target) {
//   const indices = {};

//   for (let i = 0; i < nums.length; i++) {
//     indices[nums[i]] = 1;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];
//     if (indices[diff] !== undefined && indices[diff] !== i) {
//       return [i, indices[diff]];
//     }
//   }
//   return [];
// }

// console.log(twoSum(nums, target));

// hash maps (one pass)

// let nums = [2, 7, 11, 15];
// let target = 9;

// function twoSum(nums, target) {
//   const prevMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];
//     if (prevMap.has(diff)) {
//       return [prevMap.get(diff), i];
//     }
//     prevMap.set(nums[i], i);
//   }
//   return []; // for safety purposes
// }

// console.log(twoSum(nums, target));

// Med level

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
//Exp Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs) {
  let map = new Map();
  for (const s of strs) {
    let key = s.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(s);
  }
  return Array.from(map.values());
}

console.log(groupAnagrams(strs));
