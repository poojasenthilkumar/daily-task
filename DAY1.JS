//before hoisting
var a = 'hi'
function greet ()
{
    console.log('welcome aaludra')
}
console.log(a)
greet()



//after hoisting 
console.log(a)
greet()
var a = 'hi'
function greet ()
{
    console.log('welcome aaludra')
}


console.log(a) 
greet()
add(2,3)
var a = 'hi'
function greet()
{
    console.log("welcome aaludra")
}
var add = function(a,b)
{
    console.log(a+b)
}


