// .asynchronus.js
console.log('hello')

function greeting(){
    console.log('i am arti');
}

setTimeout(greeting,3000);

setTimeout(function(){
    console.log("i am arti");
},3000);

console.log('javascript')

console.log('start')
 console.log('start second');


 setTimeout(function(){
    console.log("arti ")
 },5000)
 console.log('start')





console.log('start');


function waitforSevenSeconds(){
    let ms = 7000 + new Date().getTime();
    while(new Date() < ms){}
};


setTimeout(() =>{
    console.log('i am a girl');
},2000);

waitforSevenSeconds();





console.log('end')

 console.log('start')

function waitforSevenSeconds(){
    let ms = 7000 + new Date().getTime();
    while(new Date() < ms){}
}