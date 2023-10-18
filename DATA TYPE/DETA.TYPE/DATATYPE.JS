// "use strict";//treat all js code as never version

//lert(3+3)// we are using node.js ,not bowser

// console.log("aaru")


// let name = "aaru"
// let age = 18
// isloggenin = false
// let state;
//number=>2 to power 53
//bigint
//string=>""
//boolean=>true/false
//null=> stand lone value 
//undefined=>
//symbole=>unique
//obeject


let x = 5;
let y = 6;
let z = x + y;
console.log(z)

// primitive data type 
// String
let name = "aaru";
console.log("My string is " + name);
console.log("data type is " + (typeof  name));


// numbers

let marks = 34;
console.log("data type is " + (typeof marks))

// Boolean

let isdriver = true;
console.log("data type is " + (typeof isdriver))

// Null
let nullvar = null;
console.log("data type is " +(typeof nullver))

let undef = undefined;
console.log("data type is " + (typeof undef))


// Referance data type
myarr = [1,2,3,4,false,"string"]
console.log("data type is " + (typeof myarr))

// obeject literals
let stmarks ={
    aaru:90,
    riti:78,
    rohan:56,
    mahi:90
}
console.log(typeof stmarks);

function findname(){

}

console.log(typeof findname);

let date = new Date();
console.log(typeof date);


// null
// Number
// Symbol
// String
// Boolean
// Bigint
// undefined


// Non-Primitive Data Types
// Array
//  Objects

// let nums = [1, 2, 3]
// nums[0] = 10

// console.log(nums)      //[10,2,3]

let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true



let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10


console.log(+true);

console.log(+"");
let num1,num2,num3
num1 = num2 = num3 = 2+2
let gameCounter = 100
++gameCounter;

https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



// primitive

//7 type : string, nuumber, boolean , null, undifined, symbol, bigint

const score = 100
const scoreValue = 100.3
const outsidetemp = null
let useremail;
const id = symbol('123')
const anotherid = symbol('123')





//reference (non primitive)

//arry, object, functions