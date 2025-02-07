//IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION 
// here in this code i have used IIFE - in IIFE the varaibles, functions, data everything will a private one.
// soo it cannot be accessed from outside
// if you need to be get modified we should return the essential data

// but here in this example am not returning any data because all the essential needs like adding event all are done within this IIFE function. 
//Therefore here we are not using here return statement. 

(function () {
    let count = 0;
    const display = document.getElementById('countdisplay');
  
    function updateDisplay() {
      display.textContent = count;
    }
  
    document.getElementById('increasebtn').addEventListener('click', () => {
      count++;
      updateDisplay();
    });
  
    document.getElementById('decreasebtn').addEventListener('click', () => {
      if (count > 0) count--;
      updateDisplay();
    });
  
    document.getElementById('resetbtn').addEventListener('click', () => {
      count = 0;
      updateDisplay();
    });
  
    document.getElementById('doublebtn').addEventListener('click', () => {
      count *= 2;
      updateDisplay();
    });
  
    updateDisplay();
  })();
  
  /*
  // using return statement 
  const CounterApp = (function () {
    let count = 0;
    const display = document.getElementById('countdisplay'); 
    function updateDisplay() {
      display.textContent = count;
    }
    function increase() {
      count++;
      updateDisplay();
    }
    function decrease() {
      if (count > 0) count--;
      updateDisplay();
    }
    function reset() {
      count = 0;
      updateDisplay();
    }
    function double() {
      count *= 2;
      updateDisplay();
    }
    updateDisplay();
    return {                       // Return an object containing public methods
      increase,
      decrease,
      reset,
      double
    };
  })();
  document.getElementById('increasebtn').addEventListener('click', CounterApp.increase);
  document.getElementById('decreasebtn').addEventListener('click', CounterApp.decrease);
  document.getElementById('resetbtn').addEventListener('click', CounterApp.reset);
  document.getElementById('doublebtn').addEventListener('click', CounterApp.double);
  
  // What Closure Does in This Code? 
  /* Here the private varibale is count and it can be accessible within IIFE function .
  in IIFE function we have inner functions like updateDisplay, increase, decrease etc.. 
  every function can able to access the private varible count due to the closure concept */