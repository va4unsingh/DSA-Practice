let number1 = 0;
let number2 = 1;

for (let i = 0; i < 18; i++) {
  let newFibo = number1 + number2;
  console.log(newFibo);
  number1 = number2;
  number2 = newFibo;
}
