let myName: string = "Farhan";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

meaningOfLife = Number(false);
meaningOfLife = NaN;
meaningOfLife = parseFloat("5.55");
console.log(meaningOfLife);

isLoading = true;
album = 3432;

// function defination
const sum = (a: number, b: string = " Farhan") => {
  return a + b;
};

const mySum = sum(3);
console.log(mySum);

// Union Type
let postId: number | string;
let isActive: boolean | number;

// RegExp Type
let regEx: RegExp = /\w+/g;
console.log(regEx);
