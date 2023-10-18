
	
// function welcome(name) {
//      console.log("Hey "+""+name+" "+"welcome to GfG");
// }// Passing arguments
// welcome("aaru+++.");


// const height  =  100;
// const width = 140;
// const area = height * width;
// console.log("Area",area);
// console.log("Height",height);

// function calculatearea( heightvalue,widthvalue){
//      const height  = heightvalue ;
//      const width = widthvalue;
//      const area = height * width;
//      // console.log("Area",area);
//      // return area ;
//      // console.log("Height",height);
//      return 5;
// }

// const area1 = calculatearea(200,400);
// console.log('area',area1)


// calculatearea(200,400);
// calculatearea(800,500);
// calculatearea(200,400);
// calculatearea(800,500);

// function printmessage(){
//     console.log("hello evryone");
//     console.log("pw skills");
//     console.log("aaru Rajput");
// }

// printmessage();


// function saymessage(){
//     console.log("i am very sad to learn funcition becuses of skills by very harde")
// }

// saymessage();
// saymessage();
// saymessage();
// saymessage();

// function passmessage(){
//     return "hey aaru can i call me now";
// }
 

// const message = passmessage();
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());


// const newmessage = message + "aaru rajput";
// console.log(newmessage);

// function aaru1(coursename, enrollmessage='enroll today'){
//     return "i am verey happy" + coursename + "from gky";
// }
//  console.log(aaru1('full stacik developer',));
//  console.log(aaru1('web doveloplement','enroll today'));
//  console.log(aaru1('fronred developlement'));
//  console.log(aaru1('backend developlement'));



// function sum(a,b,c){
    // return a + b + c;
// }

// const total = (1,2,4);
// console.log(total);

// function sum0fallparameters() {
//     console.log(arguments.length);
//     let sum = 0;
//     for(let i=0; i < arguments.length -1; i++) {
//         console.log([i]);
//         sum += arguments[i];
//     }
//     return sum;
// }
// const total = sum0fallparameters(1,2,3,4,5,6,7,8,9,10);
// console.log(total);



// function square(x){ //named function
    // return x*x;
// }
// const square = function(x){ //ano ymous function
//     return x*x;
// }
// console.log(square(2));
// let squarel = (x) => x*x;
// console.log(squarel(3));


                  /*  question start */


//  question one => How do you call a function in JavaScript?

// function addNumbers(a, b) {
//     return a + b;
//   }
  
//   const result = addNumbers(3, 5); // Calling the addNumbers function with arguments 3 and 5
//   console.log(result); // Outputs 8 to the console
  





// 2. Can you explain the concept of function parameters and arguments?


//declaring a function without a parameter
function functionName() { 
    a = 10;
    b = 5;
    c = a * b;
    // console.log(c)
}

functionName() // calling function by its name and with parentheses
  


// function without parameter,  a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    // console.log(sq)
  }
  
  square() // 4
  
  // function without parameter
  function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    // console.log(sum)
  }
  
  addTwoNumbers() // a function has to be called by its name to be executed 
  

  function printFullName (){
    let firstName = 'rajput'
    let lastName = 'aaru'
    let space = ' '
    let fullName = firstName + space + lastName
    // console.log(fullName)
}

printFullName() // calling a function


function printFullName (){
    let firstName = 'Aaru'
    let lastName = 'Rajput'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
// console.log(printFullName())

// function aarufullname(){
    // let firstname = "AARU";
    // let lastname = "RAJPUT";
    // let space =  " ";
    // let fullname = firstname + space + lastname;
    // console.log(fullname);
// }
// aarufullname();


// Function with a parameter ******************

  
  // function areaOfCircle(r) {
  //   let area = Math.PI * r * r
  //   return area
  // }
  
  // console.log(areaOfCircle(10)) // should be called with one argument
  
  // function square(number) {
  //   return number * number
  // }
  
//   console.log(square(10))
  




// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let t;
// let count = 0;

// rl.question('Enter the number of test cases (t): ', (tInput) => {
//     t = parseInt(tInput);
    
//     function processTestCase() {
//         rl.question('Enter value of k: ', (kInput) => {
//             const k = parseInt(kInput);
            
//             rl.question('Enter value of x: ', (xInput) => {
//                 const x = parseInt(xInput);
                
//                 const result = k * 7 - x;
//                 console.log(result);
                
//                 count++;
                
//                 if (count < t) {
//                     processTestCase(); // Process the next test case
//                 } else {
//                     rl.close(); // Close the input stream
//                 }
//             });
//         });
//     }
    
//     processTestCase(); // Start processing the first test case
// });




