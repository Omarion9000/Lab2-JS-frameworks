// Function 1: Greeting (Concatenate text)
export function greetUser(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to Georgian College`);
  }
  
  // Function 2: Unit conversion (from Celsius to Fahrenheit)
  export function convertTemperature(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Function 3: Math operation (Calculating the factorial of a number)
  export function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
  // Function 4: Advanced function
  export function advancedFunction() {
    console.log("This is an advanced function.");
  }
  