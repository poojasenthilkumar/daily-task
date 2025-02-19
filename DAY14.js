
let myobj = { }
console.log(myobj)

let person = {
    name : "Pooja",
    age:18,
}

//hasOwnProperty - checks whether the class contains the key or not 
//if present = returns true 
//if not present = returns false 
console.log(person.hasOwnProperty("name"))   //true

console.log(person.hasOwnProperty('gender'))  //false

/*=======================================================================*/

//Shallow copy 

//takes the properties and create a separate reference 

// by using the spread operator {...}

let firstPerson = {
    name : "Hari",
    age : 22,
    //nested object 
    address : {
        city : 'Coimbatore',
        state : 'tamilnadu',
    }
}

let secondPerson = {...firstPerson} // shallow copy using spread operator 

//change something 
secondPerson.name = "Pooja"   // it only made changes to the secondPerson it will not reflect in firstPerson 
secondPerson.address.city = "chennai" // changing the nested object --> reflects in original object also

console.log(firstPerson)
console.log(secondPerson)

//Deep Copy

let thirdPerson = JSON.parse(JSON.stringify(firstPerson)) //Deep copy

thirdPerson.address.city = "Palani"
thirdPerson.name = "Naveen"

console.log(firstPerson)
console.log(thirdPerson)
/*======================================================================================*/

//toString() method 
const arr = [1, 2, 3, 4];
console.log(arr.toString()); 
/*===============================================================================*/

//Loops

//for loop 
let s = ['Apple','banana','orange']
for(let i=0; i<s.length;i++)
{
    console.log(s[i])
}

// for...of loop --> iterates over the array elements but without the access to the index numbers.

let ar = ['Pooja','Bhavani','Dhanya']
for(let names of ar)
{
    console.log(names) 
}


//Technically, arrays are also called as objects --> it is possible to use for..in

let ar2 = ['Pooja','Bhavani','Dhanya']
for(let names in ar2)
{
    console.log(names)
}
 
//Object to Primitive Conversion

const obj = {
    valueOf() {
      return 42;
    },
    toString() {
      return "This is an object";
    }
  };
  
  console.log(obj + 5); // 47 (because `valueOf()` is used and returns 42)
  /*When adding obj + 5, JavaScript first calls valueOf(), 
  which returns 42, and the addition results in 47.
  */

  //concatenating obj with string --> use toString() method
  const obj2 = {
    toString() {
      return "Hello, world!";
    }
  };
  
  console.log("Message: " + obj2); // "Message: Hello, world!" (toString() is called)
  

alert(0 == '');  // true  
alert('0' == '');  // false
