const binarySearch = (list, item, low = 0, high = list.length - 1) => {
  if (low > high) return null;

  const mid = Math.floor((low + high) / 2);
  const guess = list[mid];

  if (guess === item) {
    return mid;
  } else if (guess > item) {
    return binarySearch(list, item, low, mid - 1);
  } else {
    return binarySearch(list, item, mid + 1, high);
  }
};

const createArr = n => Array.from({ length: n }, (v, k) => k + 1);

const myList = createArr(100);

console.log(binarySearch(myList, 3)); // 2
console.log(binarySearch(myList, -1)); // null