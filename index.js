// Function to clear the entire display
function clearDisplay() {
   document.getElementById('display').value = '';
}

// Function to delete the last character from the display
function del() {
   let display = document.getElementById('display');
   display.value = display.value.slice(0, -1);
}

// Function to append a value to the display
function appendToDisplay(value) {
   let display = document.getElementById('display');
   display.value += value;
}

// Function to calculate the result and display it
function calculate() {
   let display = document.getElementById('display');
   try {
       // Evaluate the expression and display the result
       display.value = eval(display.value); // eval used for simplicity; caution with user input in real applications
   } catch (e) {
       display.value = 'Error';
   }
}

// Function to format the number (example implementation)
function formatNumber() {
   let display = document.getElementById('display');
   if (display.value) {
       display.value = parseFloat(display.value).toLocaleString('en-US');
   }
}
