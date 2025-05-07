let number1 = 0;
let number2 = 1;

for (let i = 0; i < 18; i++) {
  let newFibo = number1 + number2;
  //   console.log(newFibo);
  number1 = number2;
  number2 = newFibo;
}

// recursion

console.log(0);
console.log(1);

count = 2;

function fibonacci(prev1, prev2) {
  if (count <= 19) {
    const newFibo = prev1 + prev2;
    console.log(newFibo);
    count++;

    fibonacci(newFibo, prev1);
  }
}

fibonacci(1, 0);
