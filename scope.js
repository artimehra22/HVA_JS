// local   block & golobal scope *************
// javascript has three types of scope

//  1. Block scope
// 2. golobal scope
// 3. function scope


// let a = 10;
// const b = 20;
var c = 300;

if (true){
    let a = 10;
    const b = 20;
    // console.log("inner:",a); 
}


// for (let i = 0; i < array.length; i++){
    // const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

// golobal scope
// var name = "arti";
// function sayname(){
//     var marks = 10;
//     console.log(name);
// }
// sayname()
// console.log(marks );

// block scope me let or const hi work karte hai dont use var

let x = 120;
{
    let x = 1;
    // console.log(x);
}
// console.log(x);


// lexical scope
function dada(){
    var name = 'amlesh kumar';
    // likes is not accessible here
    function papa(){
        // console.log(name);
        // name is accesible here
        // likes is not accessible here
        function beta(){
            // innermost level of the scope chain 
            // name is also accessible here
            var likes = 'codding';
        }
        // console.log(likes);
        // beta();
    }
    // papa();
}
// dada();




