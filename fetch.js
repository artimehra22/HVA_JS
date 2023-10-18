fetch('https://api.github.cvom/user/hiteshchoudhary')
.then((Response)=>{
    return Response.json()
})

.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))