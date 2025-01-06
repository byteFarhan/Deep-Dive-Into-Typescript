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
// Optional parameter in function //Note: Always put optional parameters end position.
const sumAll = (a, b, c) => {
    if (c !== undefined) {
        // this is called Type gurd.
        return a + b + c;
    }
    return a + b;
};
logMsg(sumAll(4, 9));
logMsg(sumAll(4, 9, 3));
// Default parameter value in function // Note: Default value not work with function type aliases or function signature
const addAll = (a = 12, b, c = 10) => {
    return a + b + c;
};
logMsg(addAll(undefined, 3));
logMsg(addAll(undefined, 3, 2));
// Rest perameter
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(3, 4, 5, 6, 3));
// return never type in function
const createError = (msg) => {
    throw new Error(msg);
};
// when function has endless loop in it, then it will return never type.
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        // if (i > 100) break;
    }
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// one simple use case of never type in function
const numOrStr = (value) => {
    // Type guard
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    //   if (typeof value === "number") return "number";
    return createError("This should never happen!");
};
