// const prompt=require("prompt-sync")

// const prompt = require("prompt");

// let i=prompt("Enter a Number:");
// if(i<=18){
//     console.log("can vote")
// }else{
//     console.log("can not vote")
// }

//for loop 

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     }

// for (let i = 0; i <= 10; i++){
//     const element = i;
//     if (element == 5){
//         //console.log("5 is best number")

//     }
    //console.log(element);


// for (let i = 0; i <=10; i++){
//     console.log('outer lop value:  ${i} ');
//     for(j = 0; j <= 10; j++){7
//         console.log('iner loop value &{j} and inner loop ${i}');
   
//     }
//     console.log()
// }

    


//while loop
//     let i = 0;
// while (i < 6) {
//   console.log(i);
//   i++;
// }



//A do-while loop is similar to a while loop, but the block of code is executed at least once, even if the condition is false.
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <=6);



//A for-in loop is used to loop through the properties of an object.

// const obj = {a: 1, b: 4, c: 7};
  
// for (let prop in obj) {
//   console.log(prop + ': ' + obj[prop]);
// }

//A for-of loop is used to loop through the values of an iterable object (such as an array.

// const arr = [1, 2, 3];
  
// for (let val of arr) {
//   console.log(val);
// }

//A forEach loop is a method on arrays that executes a function for each element in the array.

// const a = [1, 2, 3];
// arr.forEach(val => console.log(val));

//A map loop is a method on arrays that creates a new array by executing a function on each element in the array.


// const b = [1, 2, 3];
// const newArr = arr.map(val => val * 2);
// console.log(newArr);



// courses = [1,2,3,4,5]
// for (let item in courses) {
//     courses += 
//     courses[item] + " ";
// }
// console.log(courses);











// loops in JS;


// for loop;

// let i = 1;

// while (i<10){
//     console.log("aaru ",i);
//     i++;
// }


// do while loop;

// let i = 1;
// do{
//     console.log("aaru", i);
//     i++

// }while (i < 10);

// for loop;

// for(let i =1; i <10; i++){
//     console.log("aaru",i)
// }

// for(let i =1; i <1000; i++){
//     if(i % 5==0){
//         if (i == 20){
//             continue;
//         }
//         console.log("aaru",i);
//     }
//     if (i > 50){
//         break;
//     }
// }
    


// print even Number;JS;

// const uptonumber = 60;
// for ( let i = 0; i < uptonumber; i++){
//     if (i % 2 == 0){
//         console.log("even number:",i)
//     }
// }


// given a number n calculate the factorial of the number .

// 4 = 4 *3*2*1=24
// 3 = 3*2*1 = 6

// const inputnumber = 4;
// const result = 1;
// result = 1*1=1
// result = 1*2 = 2
// result = 2*3 = 6
// result = 6*4 = 24

// for (let i = 1; i < inputnumber; i++ ){
//     result = result * i;
// }
// console.log("factorial of " + inputnumber + "=" + result);








// write table for 19 using loop

// const tablenumber = parseint(prompt("enter table number"));
// for (let i = 1; i <= 10; i++){
    // console.log(`${tablenumber}* ${tablenumber} = ${i * tablenumber}` );
//  }

// const prompt =require("prompt-sync")()
// let a=prompt("enter your number")
// console.log(`67`)

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What is your name? ', (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });



// partten 1,7




// for(i=5; i>=1; i--){
//     console.log("*".repeat(i))
// }







//  for(let i=1;i<=5;i++){
//     console.log(" ".repeat(5-i)+"*".repeat(i))
// }







// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         if(i==1||i==5||j==1||j==5){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }








// for(let i=1; i<=5; i++){
//     for (let j=1; j<=5; j++){
//         if (i==1||i==5||i==j){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }








// for(let i=1; i<=5; i++){
//     for (let j=1; j<=5; j++){
//         if (i==1||i==5||i+j==6||i==j){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }



// for(let i=1; i<=5; i++){
//     for (let j=1; j<=5; j++){
//         if (i==1||i==5-1||i+j==6-1){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }



function isArmstrongNumber(num) {
    const numStr = num.toString(
    );
    const numDigits = numStr.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numStr[i]);
        sum += Math.pow(digit, numDigits);
    }

    return sum === num;
}

function printArmstrongNumbersInRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (isArmstrongNumber(i)) {
            console.log(i);
        }
    }
}

// Define the range of numbers to check for Armstrong numbers:"(*)"
const startRange = 1;
const endRange = 1000;

console.log(`Armstrong numbers in the range of ${startRange} to ${endRange}:`);
printArmstrongNumbersInRange(startRange, endRange);
