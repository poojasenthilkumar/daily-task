//string datatype
let text = "Pooja"

let length = text.length; 

//number datatype
let x1 = 10
let x2 = 8.5
let x3 = 123e5
let x4 = 0.00123

//BigInt datatype
let a = 867837749579259n
console.log(typeof(x))

let a2 = BigInt(867837749579259)
console.log(typeof(x))

//boolean Datatype

let bool1 = true
let bool2 = false
console.log(bool1)
console.log(bool2)
console.log(typeof(bool1))

//undefined Datatype
let y 
console.log(y)
console.log(typeof(y))

//null Datatype
let y1 = null
console.log(y1)
console.log(typeof(y1))

//Symbol Datatype
const value1 = Symbol()
console.log(typeof value1)

const value2 = Symbol()
console.log(typeof value2)

const value3 = Symbol("Hai Pooja")
console.log(value1.description)

const id1 = Symbol("id")
const person1 = {
    name1 : "Pooja",
    age : 18,
    [id] : 23           //symbol key in []
}
console.log(person1)

// getting value of single key - using the dot operator

const id2 = Symbol("id")
const person2 ={
    name2 : "Kaviya",
    age2 : 29,
    [id2] : 89  
}
console.log(person2.name)
console.log(person2[id2])

// Symbol are immutable - it is unique data type

const data1 = Symbol("Javascript")
const data2 = Symbol("Javascript")

console.log(data1===data2) //false 

//Object Datatype

let employee = {Empname:"Pooja", empage : 18, cmpname : "aaludra"}

//by using new keyword

const employee2 = new Object()
employee2.name = "Bhavani"
employee2.age = 22
console.log(typeof(employee2))
console.log(employee2)

// function 

function sum (num1,num2)
{
    console.log(num1+num2)
}
sum(2,3)

//function Expression 

const total = function(number1,number2)
{
    console.log(number1+number2)
}
total(6,9)

// Arrow Function 

const c = (c1,c2)=>
{
    console.log(c1+c2)
}
c(9,9)



