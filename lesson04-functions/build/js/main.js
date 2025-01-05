"use strict";
let users;
users = 3;
// Literal Types
let myName;
let userName;
userName = "Farhan";
// function in TS
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
const subtract = function (a, b) {
    return a - b;
};
// interface mathFunction { // It will work as same as type mathFunction
//   (a: number, b: number): number;
// }
const multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(3, 4));
