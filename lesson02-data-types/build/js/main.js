"use strict";
let myName = "Farhan";
let meaningOfLife;
let isLoading;
let album;
meaningOfLife = Number(false);
meaningOfLife = NaN;
meaningOfLife = parseFloat("5.55");
console.log(meaningOfLife);
isLoading = true;
album = 3432;
// function defination
const sum = (a, b = " Farhan") => {
    return a + b;
};
const mySum = sum(3);
console.log(mySum);
// Union Type
let postId;
let isActive;
// RegExp Type
let regEx = /\w+/g;
console.log(regEx);
