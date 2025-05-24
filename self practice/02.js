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

// leet code ques 3 - O(n2)

// let nums = [3, 4, 5, 6];
// let target = 7;

// // Output: [0, 1];

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// console.log(twoSum(nums, target));

// Sorting - O(n log n)

// let nums = [3, 4, 5, 6];
// let target = 7;

// // Output: [0, 1];

// function twoSum(nums, target) {
//   let arr = nums.map((val, idx) => [val, idx]);
//   // console.log(arr);
//   let vader = arr.sort((a, b) => a[0] - b[0]);
//   // console.log(vader);
//   let l = 0;
//   let r = vader.length - 1;
//   while (l < r) {
//     const sum = vader[l][0] + vader[r][0];
//     if (sum === target) {
//       return [arr[l][1], arr[r][1]];
//     } else if (sum < target) {
//       l++;
//     } else {
//       r--;
//     }
//   }
// }

// console.log(twoSum(nums, target));

// One-pass Hash Map chat gpt- O(n)

// let nums = [3, 4, 5, 6];
// let target = 7;

//   // Output: [0, 1];

// function twoSum(nums, target) {
//   const map = {};

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     // console.log(complement);
//     if (map.hasOwnProperty(complement)) {
//       return [map[complement], i];
//     }
//     map[nums[i]] = i;
//   }
// }

// console.log(twoSum(nums, target));

// Hash Map (One Pass) leetcode - O(n)

// let nums = [3, 4, 5, 6];
// let target = 7;

// // Output: [0, 1];

// function twoSum(nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];
//     if (map.has(diff)) {
//       return [map.get(diff), i];
//     }
//     map.set(nums[i], i);
//   }
// }

// console.log(twoSum(nums, target));

// Leet code ques - 4 gpt help // Sorting O(n * k log k)
// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// function groupAnagrams(strs) {
//   const map = {};

//   for (const word of strs) {
//     const sorted = word.split("").sort().join("");

//     // console.log(sorted);

//     if (!map[sorted]) {
//       map[sorted] = [];
//     }
//     map[sorted].push(word);
//   }
//   return Object.values(map);
// }

// console.log(groupAnagrams(strs));

// Sorting - (m*n log n)

// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// function groupAnagrams(strs) {
//   const res = {};
//   for (let s of strs) {
//     const sortedS = s.split("").sort().join("");
//     if (!res[sortedS]) {
//       res[sortedS] = [];
//     }
//     res[sortedS].push(s);
//   }
//   return Object.values(res);
// }

// console.log(groupAnagrams(strs));

// Hash Table O(m*n)

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs) {
  const res = {};
  for (let s of strs) {
    const count = new Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    const key = count.join(",");
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(s);
  }
  return Object.values(res);
}

console.log(groupAnagrams(strs));
