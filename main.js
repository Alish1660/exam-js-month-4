// 1-misol///////////////////////////////////////////////////////////////////////

// let arr =[4,1,2,1,2,9]

// function singleNumber(num){
//   let new_arr = []
//   for(let i =0; i< arr.length; i++){
//     if(!new_arr.includes(num)){
//       new_arr.push(arr[i])
//     }
//   }
//   console.log(new_arr)
// }
// singleNumber(4)
// 2-misol //////////////////////////////////////////////////////////////////////
// const search = function (nums, target) {
//   for (let i = 0; i < nums.lenght; i++) {
//     if (nums.includes(target)) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
// };
// let nums = [2, 5, 6, 0, 0, 1, 2];
// let target = 2;
// search(nums, target);

//3 -misol /////////////////////////////////////////////////////////////////////////////
// let arr = [1, 1, 2, 2, 3];
// let new_arr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!new_arr.includes(arr[i])) {
//     new_arr.push(arr[i]);
//   }
// }
// console.log(new_arr);
// 4-misol ////////////////////////////////////////////////////////////////////////////
// object dan copy olishning 2 korinishi mavjud
// 1 - shallow copy
// 2 - deep copy
// shallow copyda objectdan nusxa olinganda xotirada yangi manzil xosil qilaydi
// shuning uchun 1- asl objectni ozgartirsak ikkala object ham ozgaradi
// Misol uchun
// let obj = {a:1,b:2}
// let new_obj = obj
// console.log(new_obj)
// 2 - deep copy deep copy ham 2 turga bolinadi
// 1 - spread operation yordamida
// 2 - JSON yordamida
// spread operator yordamida copy qilsak u xotirada yangi manzil xosil qiladi
// lekin nested object larni nestini copy qila olmaydi
// Misol uchun
// let obj = {a:1,b:2}
// let new_obj = {...obj}
// console.log(new_obj)
// JSON da objectni toligicha copy qiladi
// Misol uchun
// let obj = { a: 1, b: 2 };
// let new_obj = parse(JSON.stringify(obj));
// console.log(new_obj)
// manashu tarzda
// 5 -misol ////////////////////////////////////////////////////////////////////////

// let arr = [4, 6, 22, 11];
// for (let i = 0; i < 20; i++) {
//     let randomnum = Math.floor(Math.random() * 20) + 1;
//     if (arr[arr.length - 1] + randomnum % 2 === 0) {
//         arr[arr.length - 1] = 5;
//     } else {
//         arr[arr.length - 1] = 6;
//     }
// }

// console.log(arr);

// 6-misol //////////////////////////////////////////////////////////////////////////////////////
// let nums = [2, 2, 1, 3, 2, 8];
// let frequency = {};
// for (let num of nums) {
//     if (frequency[num]) {
//         frequency[num]++;
//     } else {
//         frequency[num] = 1;
//     }
// }

// let maxCount = Math.max(...Object.values(frequency));
// let maxDifference = 0;
// for (let num in frequency) {
//     if (frequency[num] === maxCount) {
//         continue;
//     }
//     let difference = Math.abs(num - maxCount);
//     if (difference > maxDifference) {
//         maxDifference = difference;
//     }
// }

// console.log(maxDifference);

// 7- misol /////////////////////////////////////////////////////////////////////////////////////
// let obj1 = { value: 10 };
// let obj2 = { value: 1 };
// let max = Math.max(obj1.value, obj2.value);
// let min = Math.min(obj1.value, obj2.value);
// console.log("Eng katta qiymat:", max);
// console.log("Eng kichik qiymat:", min);

// 8-misol //////////////////////////////////////////////////////////////////////////////////
// let arr = [1, 2, 3, 14];
// let sum = arr.filter((num) => num % 2 === 0).reduce((a, c) => a + c, 0);

// console.log("Juft sonlar yig'indisi:", sum)

// 9 -misol ////////////////////////////////////////////////////////////////////////////////////

// function find_numberFive(num) {
//     let arr = [1,2,3,14];
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < i; j++) {
//         if (arr[i] + arr[j] === num) {
//           result.push(arr[i], arr[j]);
//         }
//       }
//     }
//     console.log(result);
//   }
//   find_numberFive(5);

// 10 -misol /////////////////////////////////////////////////////////////////////////////////

// let num = +prompt(`enter your number `);
// function isPalindrome(num) {
//   let arr = Array.from(String(num), Number).reverse();
//   let new_num = Number(arr.join(""));
//   if (new_num === num) {
//     console.log(`palindrime`);
//   } else {
//     console.log(`palindrome emas`);
//   }
// }
// isPalindrome(num);
// 11- misol /////////////////////////////////////////////////////////////////////////////////////
// function isPalindrome(str) {
//     let reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

// function checkPalindrome() {
//     let inputStr = prompt("enter a word");
//     if (isPalindrome(inputStr)) {
//         console.log(inputStr + " palindrome");
//     } else {
//         console.log(inputStr + " palindrome emas");
//     }
// }

// checkPalindrome();

// 12-misol ////////////////////////////////////////////////////////////////////////////////////
// const getSum = (...number)=>{
//     let sum = number.reduce((total,current)=>total+current,0)
//     let digits = Array.from(String(sum),Number)
//     return digits
//   }
//    console.log( getSum(1,22,3))

// 13 -misol ///////////////////////////////////////////////////////////////////////////////////////
