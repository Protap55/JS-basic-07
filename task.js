// Take four parameters. Multiply the four numbers and then return the result

// function Multiply(numbers) {
//   let mul = 1;
//   for (let num of numbers) {
//     mul = mul * num;
//   }
//   return mul;
// }
// let numbers = [2, 4, 6, 8];
// let result = Multiply(numbers);
// console.log(`Total multiply:${result}`);

// Task-1
// Take four parameters. Multiply the four numbers and then return the result
// function MulNumber(a, b, c, d) {
//   let mul = a * b * c * d;
//   return mul;
// }
// let result = MulNumber(2, 4, 6, 8);
// console.log(result);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function oddEven(arr) {
//   let resOdd = [];
//   let resEven = [];
//   for (let num of arr) {
//     if (num % 2 === 1) {
//       resOdd.push(num * 2);
//     }
//     if (num % 2 === 0) {
//       resEven.push(num / 2);
//     }
//   }
//   return {
//     resOdd,
//     resEven,
//   };
// }
// let arr = [5, 10];
// let result = oddEven(arr);
// console.log(result);

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function avg(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum = sum + num;
//   }
//   let avgNum = sum / arr.length;
//   return avgNum;
// }
// let arr = [1, 2, 3];

// let result = avg(arr);
// console.log(result);

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function ZeroCounter(number) {
//   let count = 0;
//   for (let num of number) {
//     if (num === "0") {
//       count = count + 1;
//     }
//   }
//   return count;
// }
// let number = "1000111100010";
// let result = ZeroCounter(number);
// console.log(`Total Zero: ${result}`);

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

// function odd_even(num) {
//   if (num % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// let result = odd_even(12);
// console.log(result);
