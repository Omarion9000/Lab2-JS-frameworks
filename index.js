// Import the functions from the utilities.js file
import { greetUser, convertTemperature, calculateFactorial, advancedFunction } from './utilities.js';

// Calling the functions defined in utilities.js

// Example: Greeting
greetUser('Omar', 'Serrano');

// Example: Temperature conversion (Celsius to Fahrenheit)
const tempInCelsius = 25;
console.log(`${tempInCelsius}°C is equal to ${convertTemperature(tempInCelsius)}°F`);

// Example: Calculating the factorial of a number
const number = 5;
console.log(`Factorial of ${number} is: ${calculateFactorial(number)}`);

// Example: Calling an advanced function
advancedFunction();
