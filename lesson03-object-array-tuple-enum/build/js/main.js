"use strict";
// Array
const strArr = ["A", "B", "C", "D"];
const numStrArr = ["A", "B", "C", 3, 5, 7];
const mixedArr = ["A", "B", "C", true, false, 44, 87];
mixedArr.unshift("dd");
mixedArr.shift();
console.log(mixedArr);
strArr.push("3");
strArr[3] = 4;
console.log(strArr);
// Tuple
const myTuple = [];
let myTuple2 = ["ABC", 33, true];
let mixed = ["A", 45, false];
mixed = myTuple2;
// myTuple2 = mixed; //This will not work
myTuple2[1] = 43;
