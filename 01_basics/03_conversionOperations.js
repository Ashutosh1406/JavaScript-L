
let score = null; //string type
let score1 = "33abc"; //not a string

console.log(typeof score);
console.log(score);

let val_in_number = Number(score); //for number conversion
let val_in_number_with_string = Number(score1); //for number conversion

console.log(typeof(val_in_number));   // o/p -> number
console.log(typeof(val_in_number_with_string)); // o/p -> number 
console.log(val_in_number_with_string);  // o/p -> ** NAN (not a number) **


// let score = null;
// let score1 = undefined;

let val = String(score);
val=10;
console.log(val);

let val1 = typeof(val);
val1=20;

console.log(val1);
// console.log(typeof score1);
console.log(score);
console.log(score1);

let value1 = Number(10);
// let myname = String("ashutosh");
// console.log(value1);
// console.log(myname);
let value2 = (typeof(value1));
console.log(typeof(value2));

const arr=["ashutosh",10,"5","jasjappan"];
let stocks = arr[0];
console.log(stocks);
console.log(arr);





