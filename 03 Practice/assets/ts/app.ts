"use strict";

// String

let str: string = "Zaw Linn";
console.log(`String is : ${str}`);

// Number

let num: number = 2000;
console.log(`Number is : `, num);

// String Arrays

let strarrs: string[] = ["Red", "Green", "Blue"];
console.log(`This is String Array : `, strarrs);

// Number Arrays

let numarrs: number[] = [200, 500, 400];
console.log(`This is Number Array : `, numarrs);

// Nested String Array;

let nestStrArrs: string[][] = [["Red"], ["Green", "Blue"], ["White"]];
console.log("This is Nested String Array .", nestStrArrs);

// Nested Number Array

let nestNumArrs: number[][] = [[100, 4], [200, 5], [342]];
console.log(nestNumArrs);

//

let anyval;
anyval = "Testng";
anyval = 1000;
console.log(anyval);

// limit length;

let limitArr: [string, number] = ["Tesing", 1000];
console.log(limitArr);

// mix

let mixArrs: (string | number | boolean)[][] = [
  [1, true],
  [true, "Testing"],
  ["my Watch", 400],
];

console.log(mixArrs);
