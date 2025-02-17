/*
// creating multiple objects 
let user1 = { 
    name : "Pooja",
    age: 21,
    login(){
        console.log('you are logged in')
    },
    logout(){
        console.log('You are logged out')
    }
}
user1.login()

let user2 = {
    name:"kaviya",
    age:22,
    login(){
        console.log('you are logged in')
    },
    logout()
    {
        console.log('you are logged out')
    }
}
user2.logout()
*/

//now insted of creating a same structure of multiple objects -- we create a class 

class User {

    static numofusers = 0 ; // static - which is a common variable for all the objects. so we are using the static keyword.
    constructor(name,age){
 //instance variables --> it is the variable which is used to allocate the variables for each instance(object) which we create.
        this.name = name;
        this.age = age;    // constructor function
      //numofusers++ --> undefined 
        User.numofusers++ // for every class it need to be incremented and the method static is defined outside. so while using we need to declare it by class name. 
    }
    login()
    {
        console.log('Hi',this.name) 
    }
    logout()
    {
        console.log('you are logged in')
    }
}


let UserOne = new User('Pooja',21);    //object 1
let UserTwo = new User('Hari',21);      //object 2
console.log('Number of Users:',User.numofusers) 
UserOne.login()
UserTwo.logout()
console.log(UserOne.name)
console.log(UserTwo.name)
 
//Note : invoke the static method using the classname
/*=======================================================================*/
 
// primitive vs object

let x = "hello"               //primitive type
let y = new String("Hello")   //Object type

console.log(x)   
console.log(y)

console.log(typeof(x))  // string
console.log(typeof(y))  // object

console.log(x===y)       //false

/*==============================================================*/


