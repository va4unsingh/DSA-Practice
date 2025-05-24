let x = 121;
// let x = 123

function isPalindrome(x) {
  let rev = Math.abs(x).toString().split("").reverse().join("");
  let revNum = parseInt(rev, 10);

  if (x < 0) return false;

  if (x ===z revNum) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(x));
