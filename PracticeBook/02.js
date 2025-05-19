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
