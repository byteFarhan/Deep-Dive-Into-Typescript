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
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    active: true,
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello!!";
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
