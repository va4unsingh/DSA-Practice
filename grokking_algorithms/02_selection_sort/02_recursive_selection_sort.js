// ES6

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
//   if (!array.length) return [];

//   const copyArray = [...array];
//   const smallest = copyArray.splice(findSmallestIndex(copyArray), 1);
//   return smallest.concat(selectionSort(copyArray));
// };

// const sourceArray = [5, 3, 6, 2, 10];
// const sourtedArray = selectionSort([5, 3, 6, 2, 10]);

// console.log("Source array - ", sourceArray); // [5, 3, 6, 2, 10]
// console.log("New sorted array - ", sourtedArray); // [2, 3, 5, 6, 10]

// old js

const findSmallest = (arr, smallest = arr[0], smallestIndex = 0, i = 1) => {
  if (arr.length <= i) return smallestIndex;
  const curr = arr[i];

  if (curr < smallest) {
    smallest = curr;
    smallestIndex = i;
  }
  return findSmallest(arr, smallest, smallestIndex, i + 1);
};

const selectionSort = (arr, result = []) => {
  if (arr.length > 0) {
    const smallestIndex = findSmallest(arr);
    const [smallest] = arr.splice(smallestIndex, 1);
    result.push(smallest);
    return selectionSort(arr, result);
  }
  return result;
};

const arr = [5, 3, 6, 2, 10];
console.log(selectionSort(arr));
