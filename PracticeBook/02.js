// let array = [10, 5, 2, 3];

// function quicksort(array) {
//   if (array.length < 2) {
//     return array;
//   } else {
//     let pivot = array[0];

//     const less = array.slice(1).filter((item) => item <= pivot);

//     const greater = array.slice(1).filter((item) => item > pivot);

//     return [...quicksort(less), pivot, ...quicksort(greater)];
//   }
// }

// const sorted = quicksort(array); // [2,3,5,10]

// console.log(sorted.join(", "));

// let myList = ["apple", "banana", "cherry"];

// function printItems(myList) {
//   for (const item of myList) {
//     console.log(item);
//   }
// }
// printItems(myList);

// or
// function printItems(myList) {
//   myList.forEach((item) => console.log(item));
// }
// printItems(myList);

// let myList = ["apple", "banana", "cherry"];

// myList.forEach((item, i) => setTimeout(() => console.log(item), i * 1000));

// or

// pause helper
// const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// // prints one item per second, in order
// async function printItemsWithDelay(myList) {
//   for (const item of myList) {
//     await sleep(1000);
//     console.log(item);
//   }
// }
// printItemsWithDelay(myList)

// let array = [2, 3, 7, 8, 10];

// function multiplicationTable(array) {
//   for (const multiplier of array) {
//     for (const value of array) {
//       console.log(`${multiplier}x${value} = ${multiplier * value}`);
//     }
//   }
// }

// multiplicationTable(array);

// or
// function multiplicationTable(array) {
//   array.forEach((a) => {
//     array.forEach((b) => {
//       console.log(`${a}x${b} = ${a * b}`);
//     });
//   });
// }
// multiplicationTable(array);

// let vader = {};
// vader["apple"] = 0.67;
// vader["banana"] = 1.49;
// vader["avocado"] = 1.49;

// // console.log(vader);
// console.log(vader["apple"]);

// let phoneBook = {};
// phoneBook["varun"] = "33233294329";
// phoneBook["police"] = "112";

// console.log(phoneBook["varun"]);

// let voted = {};

// function checkVoter(name) {
//   if (name in voted) {
//     console.log("kick them out!");
//   } else {
//     voted[name] = true;
//     console.log("Let them vote");
//   }
// }

// checkVoter("vader");
// checkVoter("tubu");
// checkVoter("vader");

// let cache = {};

// function getDataFromServer(url) {
//   // Simulate a server response
//   console.log(`Fetching data from server for: ${url}`);
//   return `Data from ${url}`;
// }

// function getPage(url) {
//   if (url in cache) {
//     return cache[url];
//   } else {
//     let data = getDataFromServer(url);
//     cache[url] = data;
//     return data;
//   }
// }

// console.log(getPage("example.com")); // Fetches from server
// console.log(getPage("example.com")); // Returns cached
// console.log(getPage("another.com")); // Fetches from server
// console.log(getPage("another.com")); // Returns cached

