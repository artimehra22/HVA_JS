// Promise


// function waitForThreeSeconds(){
//     let ms = 3000 + new Date() .getTime();
//     while(new Date()<ms){}
// }


function register(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            return reject('Error while registring...');
            console.log('register end');
        },1000);

    });
}

 



function sendEmail(){

    return new Promise((resolve,reject)=>{

        setTimeout(() =>{

            console.log('sendEmail');

            resolve();

        },5000);

    });

}  


function login(){

    return new Promise((resolve,reject)=>{

        setTimeout(() =>{

            console.log('login end');

            resolve();

        },3000);
    });

}


function getuserdata(){

    return new Promise((resolve,reject)=>{

        setTimeout(() =>{

            console.log('getuser data');

            resolve();

        },6000);

    });

}

function displayuserdata(){

    return new Promise((resolve,reject)=>{

        setTimeout(() =>{

            console.log('display');

            resolve();

        },1000);

    });
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



// register()
//   .then(sendEmail)
//   .then(login)
//   .then(getuserdata)
//   .then(displayuserdata);

//   .catch((error)=>{
//     console.log('Error:',error);
// });

// console.log('other application work!');


// async.await


async function authenticate(){

    await register();

    await sendEmail();

    await getuser ();

    await display();

    await loginend()

}

authenticate()
