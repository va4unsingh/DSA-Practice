let number1 = 0;
let number2 = 1;

for (let i = 0; i < 18; i++) {
  let newFibo = number1 + number2;
  //   console.log(newFibo);
  number1 = number2;
  number2 = newFibo;
}

// recursion

// console.log(0);
// console.log(1);

count = 2;

function fibonacci(prev1, prev2) {
  if (count <= 19) {
    const newFibo = prev1 + prev2;
    // console.log(newFibo);
    count++;

    fibonacci(newFibo, prev1);
  }
}

fibonacci(1, 0);

// Finding The nth Fibonacci Number Using Recursion

function F(n) {
  if (n <= 1) {
    return n;
  } else {
    return F(n - 1) + F(n - 2);
  }
}

console.log(F(19));

// pratice by own self

console.log(0);
console.log(1);

let count = 2;

function fibonacci(prev1, prev2) {
  if (count <= 19) {
    // your logic here

    // 1. Calculate newFibo
    let newFibo = prev1 + prev2;

    // 2. Print it
    console.log(newFibo);

    // 3. Update prev1 and prev2
    prev2 = prev1;
    prev1 = newFibo;

    // 4. Increase count
    count++;

    // 5. Call fibonacci again with new values
    fibonacci(prev1, prev2);
  } else {
    return;
  }
}

fibonacci(1, 0);
