/* ENCAPSULATION  --> hiding the data

keeping private not exposing it outside 

Encapsulation ensures that object properties are not directly accessible outside the class.
Getter & Setter Methods allow controlled access and modification.

*/

function Person(_name, _age)
{
    this.name = _name
    this.age = _age
}


let person1 = new Person('Pooja',21)

person1.name  = "Bhavani" 
/*here we are changing the name pooja into bhavani 
which means we are able to change the name from outside the function also
to avoid this we use encapsulation  */

console.log(person1)


class Car {
    #brand;  // Private property
  
    constructor(brand) {
      this.#brand = brand;  // Assign value
    }
  
    getBrand() {
      return this.#brand;  // Getter method
    }
  
    setBrand(newBrand) {
      this.#brand = newBrand;  // Setter method
    }
  }
  
  const myCar = new Car("Toyota");
  console.log(myCar.getBrand());  // Output: Toyota
  
  myCar.setBrand("Honda");  // Change value using setter
  console.log(myCar.getBrand()); // Output: Honda
  
  //console.log(myCar.#brand); // Error! Private property can't be accessed
  

