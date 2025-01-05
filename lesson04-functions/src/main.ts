// Type Aliases
type strOrNum = string | number;
type strOrNumArray = (string | number)[];

type Guitarist = {
  name: string;
  active: boolean;
  albums: strOrNumArray;
};

type userId = strOrNum;

let users: strOrNum;
users = 3;

// Literal Types
let myName: "Farhan";
let userName: "Farhan" | "Rifat" | "Rakib" | "Shawon";
userName = "Farhan";

// function in TS
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (msg: string | number): void => {
  console.log(msg);
};

const subtract = function (a: number, b: number): number {
  return a - b;
};

//EX of Type Ailases for function
type mathFunction = (a: number, b: number) => number;

// interface mathFunction { // It will work as same as type mathFunction
//   (a: number, b: number): number;
// }

const multiply: mathFunction = (c: number, d: number) => {
  return c * d;
};

logMsg(multiply(3, 4));
