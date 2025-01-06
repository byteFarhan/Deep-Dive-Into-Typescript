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

// Optional parameter in function //Note: Always put optional parameters end position.
const sumAll = (a: number, b: number, c?: number): number => {
  if (c !== undefined) {
    // this is called Type gurd.
    return a + b + c;
  }
  return a + b;
};

logMsg(sumAll(4, 9));
logMsg(sumAll(4, 9, 3));

// Default parameter value in function // Note: Default value not work with function type aliases or function signature
const addAll = (a: number = 12, b: number, c: number = 10): number => {
  return a + b + c;
};

logMsg(addAll(undefined, 3));
logMsg(addAll(undefined, 3, 2));

// Rest perameter
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(3, 4, 5, 6, 3));

// return never type in function
const createError = (msg: string): never => {
  throw new Error(msg);
};

// when function has endless loop in it, then it will return never type.
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    // if (i > 100) break;
  }
};

// Custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// one simple use case of never type in function
const numOrStr = (value: number | string): string => {
  // Type guard
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  //   if (typeof value === "number") return "number";
  return createError("This should never happen!");
};
