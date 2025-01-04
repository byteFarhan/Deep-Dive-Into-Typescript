"use strict";
// Array
const strArr = ["A", "B", "C", "D"];
const numStrArr = ["A", "B", "C", 3, 5, 7];
const mixedArr = ["A", "B", "C", true, false, 44, 87];
mixedArr.unshift("dd");
mixedArr.shift();
console.log(mixedArr);
strArr.push("3");
// strArr[3] = 4;
// this will throw an error because Type 'number' is not assignable to type 'string'.
console.log(strArr);
// Tuple
const myTuple = [];
let myTuple2 = ["ABC", 33, true];
let mixed = ["A", 45, false];
mixed = myTuple2;
// myTuple2 = mixed; //This will not work
myTuple2[1] = 43;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = myTuple2;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "John";
let evh = {
    name: "Eddie",
    active: true,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    active: true,
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (obj) => {
    // return `Hello ${obj.name?.toUpperCase()}`;
    if (obj.name) {
        return `Hello ${obj.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade);
console.log(Grade["1"]);
var Test;
(function (Test) {
    Test[Test["A"] = 100] = "A";
    Test[Test["B"] = 101] = "B";
    Test[Test["C"] = 102] = "C";
})(Test || (Test = {}));
console.log(Test.C);
// console.log(Test?.I); //This will give error.
