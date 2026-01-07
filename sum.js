function sumOfNum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum = sum + num;
  }
  return sum;
}

let arr = [4, 8, 6, 9, 41, 10];
let result = sumOfNum(arr);
console.log(result);
