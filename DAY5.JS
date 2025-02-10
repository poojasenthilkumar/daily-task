//PROMISES 

//CREATING THE PROMISES 

const mypromise = new Promise((resolve,reject)=>{
    let ans = true

    setTimeout(()=>
    {
        if(ans)
        {
            resolve("Promise resolved successfully")
        }
        else
        {
            reject("Promise rejected")
        }
    },2000)
})

//ACCESSING THE PROMISES
mypromise
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error)

})
.finally(()=>{
    console.log('test')
})


