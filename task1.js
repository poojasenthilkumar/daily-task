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
  