// ES6 MODULES --> REFER INDEX.HTML, CAR.JS 

import c, {fillGas,repair} from './car.js'
let car1 = new c() 
car1.drive()
/*
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
    */