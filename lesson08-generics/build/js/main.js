"use strict";
// Generics
const echo = (arg) => arg;
console.log(echo(7));
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    else if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const checkBooValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    else if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
console.log(checkBooValue(false));
console.log(checkBooValue(0));
console.log(checkBooValue(true));
console.log(checkBooValue(1));
console.log(checkBooValue("Dave"));
console.log(checkBooValue(""));
console.log(checkBooValue(null));
console.log(checkBooValue(undefined));
console.log(checkBooValue({})); // modified
console.log(checkBooValue({ name: "Dave" }));
console.log(checkBooValue([])); // modified
console.log(checkBooValue([1, 2, 3]));
console.log(checkBooValue(NaN));
console.log(checkBooValue(-0));
