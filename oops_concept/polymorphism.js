//Polymorphism  - same method name 
class Animal {
    sound()
    {
        console.log("it sounds")
    }
}

class Dog extends Animal 
{
    sound()
    {
        console.log("it barks")
    }
}

class cat extends Animal {
    sound() 
    {
        console.log("it meows")
    }
}

let Animal1  = new Animal() 
let tommy = new Dog()
let pitty  = new cat()

tommy.sound()
pitty.sound()
