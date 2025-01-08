"use strict";
// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
// TS soliution no 1.
// const year = document.getElementById("year")!;
// const thisYear = new Date().getFullYear() as unknown;
// year.setAttribute("datetime", thisYear as string);
// year.textContent = thisYear as string;
// TS soliution no 2.
// const year = document.getElementById("year") as HTMLSpanElement;
// const thisYear = new Date().getFullYear() as unknown as string;
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
// TS soliution no 3.
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
// console.log(thisYear);
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
