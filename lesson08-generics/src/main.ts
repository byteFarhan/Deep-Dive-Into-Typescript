// Generics

const echo = <T>(arg: T): T => arg;
console.log(echo(7));

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  } else if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};
// console.log(isTrue(false));
// console.log(isTrue(0));
// console.log(isTrue(true));
// console.log(isTrue(1));
// console.log(isTrue("Dave"));
// console.log(isTrue(""));
// console.log(isTrue(null));
// console.log(isTrue(undefined));
// console.log(isTrue({})); // modified
// console.log(isTrue({ name: "Dave" }));
// console.log(isTrue([])); // modified
// console.log(isTrue([1, 2, 3]));
// console.log(isTrue(NaN));
// console.log(isTrue(-0));

// Alternative of above function
interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBooValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  } else if (isObj(arg) && !Object.keys(arg as keyof T).length) {
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
