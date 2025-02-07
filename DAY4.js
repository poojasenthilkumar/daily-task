//BY USING ARROW FUNCTION
setTimeout(()=>{
    console.log("Hello");
},3000)

//BY USING NAMED FUNCTION

setTimeout(greeting,3000)
function greeting()
{
    console.log("hello")
}

//BY PASSING PARAMETERS 

setTimeout(greeting,3000,"hi")
function greeting(x)
{
    console.log(x)
}

//clearTimeout() method

// we can also cancel the setTimeout at whenever we needed by using if condition and function expression  -- > by using clearTimeout() method

const timeoutID = setTimeout(() =>
{
    console.log('This will not run!');

}, 2000);

clearTimeout(timeoutID); // Clear the timeout before it executes



clearTimeout(timeoutID1)
const timeoutID1 = setTimeout(()=>{
    console.log("this will not run")
},2000);  // No output 

// because clearTimeout() was called before the timeout was even set --> in this case, the timeout wasn't even scheduled yet).

//setInterval() method
//example 1
setInterval(()=>
{
    console.log("Hii aaludra");

},3000)

//example 2
let counter = 0
setInterval(count,1000)
function count()
{
    console.log(counter++)    //returns counter every second : 0 1 2 3 4...

}

//clearInterval() method 

// example 3 

let counter1 = 0
const count1Interval  = setInterval(count1,1000)
function count1()
{
    console.log(counter1++);
    if(counter1>5)
    {
    clearInterval(count1Interval)
    }
}

// returns the counter every second 1 2 3 4 5 
// but after 5 the count will not increments due to clearInterval() method
//test line 123