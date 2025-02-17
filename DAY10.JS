
const calculator = require('./calc')

calculator.addition(2,3)
calculator.subtraction(6,7)
calculator.multiplication(5,5)
calculator.division(2,2)

//destructuring arrays

let arr = ["Pooja",18,"aaludra"]
console.log(arr)  // normal array

let[a,b,c] = arr
console.log(a)
console.log(b)
console.log(c)

//destucturing objects

let Myobj = {
    name : "aaludra",
    place:"coimbatore",
    floor : 2
}

console.log(Myobj)

let {name:n,place:p,floor:f}=Myobj 
console.log(n)

//for in loop  --> for iterating in objects

let colors = {
    primary : "blue",
    secondary : "Yellow", 
    Tertiary : "Orange"
}

for (var color in colors)
{
    console.log(color+ '->' + colors[color])
}

 
colorArray = ["red","blue","Yellow","green"]
for(var color in colorArray)
{
    console.log(color + '-->' + colorArray[color])
}


//for of loop-->  for iterating in arrays

let arr2 = [10, 20, 30];

for (let index in arr2) {
  console.log(index, ":", arr2[index]); 
}

/* Note:  Issue: This returns the indexes, not the values. */
let arr3 = [10, 20, 30];

for (let index = 0; index < arr3.length; index++) {
  console.log(index, ":", arr3[index]); // Use index to access the array
}
/*
for...of	-->	When working with elements directly (e.g., arrays, strings, iterables)
for...in	 --> When working with object properties or array indices
*/

/*                          HIGHER ORDER FUNCTION                  */


 let array = [1,2,3,4,5]
 let sqrArray = []

 for(let i=0;i<array.length;i++)
 {
    sqrArray.push(array[i] * array[i]) 
 }

 console.log(sqrArray)


/*
map function 

map will loop through every elemnt of the array and will perform the specific operation that you have provided
map method will always return the result in array 

*/ 

const num = [1,2,3,4,5]
const sqrnum = num.map(function(n){
    return n*n
})
console.log(sqrnum) 

/* or by using arrow function 

const num = [1,2,3,4,5]
const sqrnum = num.map((n)=>{
    return n*n
})
console.log(sqrnum) 

*/


/* 
find function 

find - find returns the first element of an array that satisfy the condition. */

const transaction = [200, 100, 899, -999, 0 ,-90]

let answer = transaction.find((n)=>{
    return n<0;
})
console.log(answer) 

// findIndex - returns the first Element's index of an array that satisfy the condition

const transactions = [200, 100, 899, -999, 0 ,-90]

let answers = transactions.findIndex((n)=>{
    return n<0;
})
console.log(answers) 

/* Some Method : 

condition check : to get true or false based on condition 
it will return true if even 1 element satisfies the condition.
*/

const transactions1 = [200, 100, 899, -999, 0 ,-90]

let answers1 = transactions1.some((n)=>{
    return n<0;
})
console.log(answers1) 

/*Every method  
true - if every condition gets satisfy 
false - if any one does not satisfies 
*/

let res = transactions1.every((n)=>{
    return n>0
})

console.log(res) 


// Filter

// Filter returns a new Array it will return all those elements that matches the specific condition 
//if the condition is true it return the element for that confition 
//if it is false discard the element 

let numbers = [1,2,20,35,12,17,46]

let evenNum = numbers.filter((n)=>{
    return n%2==0
})

console.log(evenNum)

//Reduce  


let sumarr = [100,200,5,80,0]
let sum = 0;                          //normal way to find the sum of every element in an array     
for(let i =0;i<sumarr.length;i++)
{
    sum = sum+sumarr[i]
}
console.log(sum)

//Now lets use reduce method

let result = num.reduce(acc , value) 
