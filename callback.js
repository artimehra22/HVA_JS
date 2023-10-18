// 1. REGISTER
// 2.SEND.WELCOME.EMAIL
// 3.LOG.IN
// 4.GET.USER.DATA
// 5.DISPLAY.USER.DATA

function waitForThreeSeconds(){
    let ms = 3000 + new Date() .getTime();
    while(new Date()<ms){}
}
rg


function register(callback){
    setTimeout(() =>{
        console.log('rigester end');

        callback();

    },1000);
    
}


function sendEmail(callback){
setTimeout(() =>{
    console.log('sendEmail');

    callback();

},5000);

}   


function login(callback){
setTimeout(() =>{
    console.log('login end');

    callback();
},3000);

}

function getuserdata(callback){
 
setTimeout(() =>{
    console.log('getuser data');
    callback();
},6000);

}

function displayuserdata(){
  
setTimeout(() =>{
    console.log('display');
},1000);

}


 // callback.hell

// register(function() {

//     sendEmail(function() {

//         login(function() {

//             getuserdata(function() {

//                 displayuserdata();
//             });
            
//         });
        
//     });
// });



console.log('other application work!');

