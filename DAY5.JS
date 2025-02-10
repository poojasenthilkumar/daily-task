//PROMISES 
//CREATING THE PROMISES  - EXAMPLE 1                      
const mypromise1 = new Promise((resolve,reject)=>{
    let ans1 = true

    setTimeout(()=>
    {
        if(ans1)
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
mypromise1
.then((message)=>{
    console.log(message)// runs if the code is resolved - ie: if there is no prblm in code ---> (if block gets executed) --> "then" gets the resolve message and store it in its function and gets prints 
})
.catch((error)=>{
    console.log(error)// if the code is rejected - ie: if there is a prblm in the code ---> else block gets executed --> "catch" gets the reject message and store it in its function and gets prints 

})
.finally(()=>{
    console.log('test')// it gets prints always
})

/*==========================================================================================================================================*/
//KNOW MORE ABOUT CATCH -- > in catch we have 3 properties for error object --> stack, name and message 
//EXAMPLE 2 
const mypromise2 = new Promise((resolve,reject)=>{
    let ans2 = false

    setTimeout(()=>
    {
        if(ans2)
        {
            resolve("Promise resolved successfully")
        }
        else
        {
            reject(new Error('No data'))
        }
    },2000)
})

//ACCESSING THE PROMISES
mypromise2
.then((message)=>{
    console.log(message)// runs if the code is resolved - ie: if there is no prblm in code ---> (if block gets executed) --> "then" gets the resolve message and store it in its function and gets prints 
})
.catch((error)=>{
    console.log(error.stack)// if the code is rejected - ie: if there is a prblm in the code ---> else block gets executed --> "catch" gets the reject message and store it in its function and gets prints 

})
.finally(()=>{
    console.log('test')// it gets prints always
})

/* 
NOTES : 
if error alone given --> prints the "no data" msg  ie : output  :  ERROR : No data
if error.name --> o/p --> ERROR 
if error.message -->o/p--->  No data 
if error.stack--> o/p ---> breif about 
*/

/*======================================================================================================================================*/

// EXAMPLE 3 ----> without using then,catch and finally 
// USING ASYNC/AWAIT 
                                
let data = false;
function project(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            if(data)
            {
                resolve("project success")
            }else
            {
                reject("project error")
            }

        },2000);
    });
}

async function check()
{
    try{
        let result = await project()
        console.log(result)
    }
    catch {                                     
        console.log('project has some error pls rectify it')
    }
    finally{
        console.log('test')
    }
}
check()

/*====================================================================================================================================================*/

// PROMISE STATIC METHODS
//Promise.race(), Promise.all(),Promise.any()

let reachA = new Promise((resolve,reject)=>{
    const reached = true
    setTimeout(()=>
    {
        if(reached)
        {
            resolve("Promise resolved successfully")
        }
        else                                                      
        {
            reject("Promise rejected")
        }
    },2000)
})

let reachB = new Promise((resolve,reject)=>{
    const reached = false
    if(reached)
    {
        setTimeout(resolve,2000,"bhavani reached")
    }
    else{
        reject("bhavani not reached")
    }
})

let reachC = new Promise((resolve,reject)=>{
    const reached = true
    if(reached)
    {
        setTimeout(resolve,3000,"Dhanya reached")
    }
    else{
        reject("Dhanya not reached")
    }
})

let reachD = new Promise((resolve,reject)=>{
    const reached = false
    if(reached)
    {
        setTimeout(resolve,4000,"hari reached")
    }
    else{
        reject("hari not reached")
    }
})

Promise.race([reachA,reachB,reachC,reachD])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))



