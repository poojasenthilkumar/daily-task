(function () {
    let count = 0;
    const display = document.getElementById('counter-display');
  
    function updateDisplay() {
      display.textContent = count;
    }
  
    document.getElementById('increase-btn').addEventListener('click', () => {
      count++;
      updateDisplay();
    });
  
    document.getElementById('decrease-btn').addEventListener('click', () => {
      if (count > 0) count--;
      updateDisplay();
    });
  
    document.getElementById('reset-btn').addEventListener('click', () => {
      count = 0;
      updateDisplay();
    });
  
    document.getElementById('double-btn').addEventListener('click', () => {
      count *= 2;
      updateDisplay();
    });
  
    updateDisplay();
  })();
  