//Type Aliases
type one = string;
type two = string | number;
type three = "hello";

//convert to more or less specific type
const a: one = "hello";
const b = a as two; // less specific
const c = a as three; // more specific

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): string | number => {
  if (c === "add") return a + b;
  return "" + a + b;
};

const myVal: string = addOrConcat(3, 4, "concat") as string;

// Be careful! TS sees no problem - but a string is returned
const nextVal: number = addOrConcat(4, 6, "concat") as number;

// This is called forced casting or dubble casting in TS. (not recomended)
// (10 as unknown) as string;
10 as unknown as string;

// use case of type assertions in the DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;
