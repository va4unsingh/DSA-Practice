// ES6 JS

const findSmallestIndex = (array) => {
  let smallestElement = array[0];
  let smallestIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (array) => {
  const sortedArray = [];
  const copyArray = [...array];

  for (let i = 0; i < array.length; i++) {
    const smallestIndex = findSmallestIndex(copyArray);

    sortedArray.push(copyArray.splice(smallestIndex, 1)[0]);
  }
  return sortedArray;
};

const sourceArray = [5, 3, 6, 2, 10];
const sourtedArray = selectionSort([5, 3, 6, 2, 10]);

console.log("Source array - ", sourceArray); // [5, 3, 6, 2, 10]
console.log("New sorted array - ", sourtedArray); // [2, 3, 5, 6, 10]
