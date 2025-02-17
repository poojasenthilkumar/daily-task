//Inheritance - acquiring the properties of the base class 

//parent class  or base class
class User {

    static numofusers = 0 ; 
    constructor(name,age){
 
        this.name = name;
        this.age = age;   
        this.storage = 100
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
//derived class or child class
class paidUser extends User{
    constructor(name,age) {
        //this.name = name,
       // this.age = age, // error : bcz we cant directly access the parameters like parent class
        super(name,age); //calling the base class constructor in derived class is by using the "super" keyword. 
        this.storage = 100; 
    }
    message(){
        console.log('You have 100gb free storage')
    }
//Overriding - redefining the base class method 
    login(){
        console.log("Thanks for logging in")
        return this   // this is used to return this as object 
    }
}
let paidUser1 = new paidUser('Pooja',21)
paidUser1.message() // valid - derived class can access the derived class method
//User.message() // invalid - parent class cannot access the derived class method
paidUser1.login() // valid - derived class can access the parent class methods
 
/*here we have written th override code 
soo the derived class login will be accessed 
but if we have not override the parent class login will be accessed.*/

/*=======================================================================================*/ 

// Note 

// METHOD CHAINING

//paidUser1.login().message()  --> error

/* gives error bcz for login method we have paiduser1 object to call but for message method we dont have any object to invoke  

How come it becomes possible 

by making the login() method to return the object. By doing like this 
now login() returns object 
so that object.message() runs and returns output without the error.
*/ 
