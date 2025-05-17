// ES6 JS

// const findSmallestIndex = (array) => {
//   let smallestElement = array[0];
//   let smallestIndex = 0;

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < smallestElement) {
//       smallestElement = array[i];
//       smallestIndex = i;
//     }
//   }
//   return smallestIndex;
// };

// const selectionSort = (array) => {
//   const sortedArray = [];
//   const copyArray = [...array];

//   for (let i = 0; i < array.length; i++) {
//     const smallestIndex = findSmallestIndex(copyArray);

//     sortedArray.push(copyArray.splice(smallestIndex, 1)[0]);
//   }
//   return sortedArray;
// };

// const sourceArray = [5, 3, 6, 2, 10];
// const sourtedArray = selectionSort([5, 3, 6, 2, 10]);

// console.log("Source array - ", sourceArray); // [5, 3, 6, 2, 10]
// console.log("New sorted array - ", sourtedArray); // [2, 3, 5, 6, 10]

// JS old

const findSmallest = (arr) => {
  let [smallestElement] = arr;
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];

    if (el >= smallestElement) continue;
    smallestElement = el;
    smallestIndex = i;
  }
  return smallestIndex;
};

const selectionSort = (arr) => {
  const copy = [...arr]; // Make a copy so original is unchanged
  const size = copy.length;
  const result = new Array(size).fill(0);

  for (let i = 0; i < size; i++) {
    const smallestIndex = findSmallest(copy);
    const [smallestElement] = copy.splice(smallestIndex, 1);
    result[i] = smallestElement;
  }
  return result;
};

const sourceArray = [5, 3, 6, 2, 10];
const sortedArray = selectionSort(sourceArray);

console.log("Source array - ", sourceArray); // [5, 3, 6, 2, 10]
console.log("New sorted array - ", sortedArray); // [2, 3, 5, 6, 10]
