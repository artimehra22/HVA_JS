// const codding = ["js","ruby","java","python","cpp"]


// const values = codding.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(values);


const mynums = [1,2,3,4,5,6,7,8,9,10];
//  let newnum = mynums.filter((num) => {    
//  num > 4

//  });

// const newnums = []

// mynums.forEach( (num ) => {
//     if (num > 4){
//         newnums.push(num)
//     }
// })
//  console.log(newnums);


const mynumers = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynumers.map((num) => {
    // return num + 10})
// console.log(newnums)

 const newnums = mynumers  
                .map((num) => num * 10)
                .map((num) => num + 1)

console.log(newnums);