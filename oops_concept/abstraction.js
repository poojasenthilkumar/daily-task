//Abstraction

class Vehicle {
    constructor(name) {
      this.name = name;
    }
  
    startEngine() {
      console.log(`${this.name}'s engine started`);
    }
  }
  
  class Car extends Vehicle {
    startEngine() {
      console.log(`${this.name} is starting with a key`);
    }
  }
  

  let myCar = new Car("Toyota");
  myCar.startEngine(); // Output: Toyota is starting with a key

  class BankAccount {
    #balance; // Private property
  
    constructor(balance) {
      this.#balance = balance;
    }
  
    getBalance() {
      return `Your balance is $${this.#balance}`;
    }
  }
  
  let account = new BankAccount(5000);
  console.log(account.getBalance()); // Output: Your balance is $5000
  //console.log(account.#balance); // Error: Private field cannot be accessed directly
  
  
/*
Hides unnecessary details (e.g., #balance is private)
Provides a clear interface (e.g., getBalance() to check balance)
Encapsulation helps maintain security
*/