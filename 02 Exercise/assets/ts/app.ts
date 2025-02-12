"use strict";
// string

let fullname: string = "Zawlinn";
console.log(fullname);

// number

let age: number = 250;
console.log(age);

// boolean

let hascar: boolean = false;
console.log(hascar);

// Any Type

let studentid;

studentid = 1001;
studentid = "1002";

console.log(studentid);

// Array of string

let colorarrs: string[] = ["red", "green", "blue"];

// colorarrs = 10;
console.log(colorarrs);

// Array of string

let numarrs: number[] = [100, 200, 300];

// colorarrs = 10;
console.log(numarrs);

// Array of string, boolean and number

let mxarrs1: (number | string | boolean)[] = [
  "red",
  "green",
  "blue",
  100,
  200,
  400,
  true,
  false,
];

console.log(mxarrs1);

// Nested array of string

let greetarrs: string[][] = [["hi"], ["hello", "hey"], ["hifi", "zoho"]];

console.log(greetarrs);

// Nested array of numbers

let nestnum: number[][] = [[100], [200, 599], [1000, 2099]];

console.log(nestnum);

// Nested Array of string, number and boolean

let infoarrs: (string | number | boolean)[][] = [
  ["string", 100],
  [true, "main"],
  [false, 200],
];

console.log(infoarrs);

// Tuple (Fixed value or fixed length)

const product: [string, number] = ["This is string", 10000];

console.log(product);
