// In JavaScript, almost "everything" is an object.




















const { method, values } = require("lodash");


var aaru1 = {
    name1:"aaru",
    name2: "sonali",
    name3: "kopal",
    name4: "geetika",
    name5: "himanshi",
    name6: "preeti"
};
// console.log(aaru1)

let value  = {
    aaru:'girl',
    sonali:'women',
    mahi:'men',
}
// console.log(value);
console.log(value.girl)


var car1 ={
    name:'honda city',
    manufactoring:'honda',
    fuecapacity:40,
    isautomatic:true,
    greetme:function(){
        // console.log("hello form aaru rajput --pw skills");
    }
} 

// console.log(car1.greetme());


var car2 = {
    name:'sonet',
    menufactoring:'kia',
    fuelcapacity:45,
    isautomatic:true,
}


var obj = {
    key1:'value1',
    key2:'value2',
}


//  console.log(car1);
//  console.log(car2);


// console.log(car1.fuecapacity, car1.isautomatic);
// console.log(car2.name,car2.fuelcapacity, car1.isautomatic  )











// var mydetail ={
//     name:"arti",
//     title:"engnineer at | microsoft | ex-flipkart |mentor",
//     expertise:['#frontede','#interview','#javascript','#systeam'],
//     followers:15000,
// }
// console.log(mydetail);



var mydetails = new Object();
mydetails.name = "aarurajput";
mydetails.title = "engnineer at | microsoft | ex-flipkart |mentor";
mydetails.expertise = ['#frontede','#interview','#javascript','#systeam'];
mydetails.followers = 15000;
mydetails.greetme = function(){
    // console.log("hello form aaru rajput --pw skills");
}
// console.log(mydetails);








// object using constructor mrthod

// {
//     introduction:"arti",
//     title:"javascript foundation",
//     description:"javascript programing",
//     language:english,
    //    duration : 10,
//     fees:"free",
//     startdate:'5 aprial 2023',
//     youtubelink:'https://www.youtube.com/engineerchirg'
//     }



function course(
    instructor,
    title,
    description,
    langauge,
    duration,
    fees,
    startdate,
    youtubelink
)   {
    this.instructor = instructor;
    this.title = title;
    this.descritption = description;
    this.langauge = langauge;
    this.duration = duration;
    this.fees = fees;
    this.startdate = startdate;
    this.youtubelink = youtubelink;

}

let javascriptcourse = new course("arti",
    "javascriptfoundation",
    "javascript programing",
    "english",
     15,
     "free",
     "5 april 2023",
     "https://www.youtube.com/engeerchirag");
    // console.log(javascriptcourse );
    
let 
    fullstackcourse = new course("arti",
    "javascriptfoundation",
    "javascript programing",
    "english",
     15,
     "free",
     "5 april 2023",
     "https://www.youtube.com/engeerchirag"
);
    // console.log(fullstackcourse,javascriptcourse);
  

    //  object delete method ********************************************************


    // delete javascriptcourse.descritption;
    //  console.log(javascriptcourse);


// add on Object.*******************************
    // javascriptcourse.descritption = null;
    // console.log(javascriptcourse);


// object method ******************************

    // console.log(Object.keys(javascriptcourse));
    // console.log(Object.values(javascriptcourse));


// frrez method**********************************
// Object.freeze(javascriptcourse);

// Object.seal(javascriptcourse);
// javascriptcourse.instructorcompany = 'microsoft';
// javascriptcourse.instructor = "lalaji";
// console.log(javascriptcourse);



// Syntax*************************


// for (var key in javascriptcourse){
//     console.log(javascriptcourse[key]);
// }



