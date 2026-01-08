// function sumOfNum(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum = sum + num;
//   }
//   return sum;
// }

// let arr = [4, 8, 6, 9, 41, 10];
// let result = sumOfNum(arr);
// console.log(result);

function evenNumber(num) {
  let sum = 0;
  for (let evenNum of num) {
    if (evenNum % 2 === 0) {
      sum = sum + evenNum;
    }
  }
  return sum;
}

let num = [15, 24, 39, 78, 62, 45, 69, 78, 23, 54, 125, 74];
let result = evenNumber(num);
console.log(`Total even number:${result}`);

let num1 = [36, 42, 54, 85, 62, 17, 82, 32, 11];
let result1 = evenNumber(num1);
console.log(`Total even number:${result1}`);
