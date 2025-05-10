// Checking sum zero - Problem 1
// [-5,-4,-3,-2,0,2,4,6,8] => Input
// [-4, 4] => Output

let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

let sumPairZero = () => {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        pairs.push(arr[i], arr[j]);
      }
    }
  }
  return pairs;
};

console.log(sumPairZero(arr));

// o(n^2) quadratic time complexity
// o(n) // yeh karna hai
