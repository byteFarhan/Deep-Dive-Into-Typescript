"use strict";
//convert to more or less specific type
const a = "hello";
const b = a; // less specific
const c = a; // more specific
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
const myVal = addOrConcat(3, 4, "concat");
// Be careful! TS sees no problem - but a string is returned
const nextVal = addOrConcat(4, 6, "concat");
// This is called forced casting or dubble casting in TS. (not recomended)
// (10 as unknown) as string;
10;
// use case of type assertions in the DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
