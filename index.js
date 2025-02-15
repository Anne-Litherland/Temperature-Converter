/**
 * @param {number} f temperature in °F (input)
 * @returns {number} temperature in °C (output)
 */
function convertToCelcius(f) {
  return (f - 32) * (5 / 9); // conversion function f to c
}

/**
 * @param {number} f temperature in °F (input)
 * @return {string} description (output)
 */
function describeTemperature(f) {
  const c = convertToCelcius(f); // variable initialized with value of conversion function

  let description = ""; // description variable contains string value

  if (c < 0) {
    description = "very cold"; // if c < 0, description will be "very cold"
  } else if (c < 20) {
    description = "cold"; // if c < 20, description will be "cold"
  } else if (c < 30) {
    description = "warm"; // if c < 30, description will be "warm"
  } else if (c < 40) {
    description = "hot"; // if c < 40, description will be "hot"
  } else {
    description = "very hot"; // all temp > 40, description will be "very hot"
  }

  return `${f}°F is ${c}°C. That is ${description}.`; // output: string `${f}F is ${c}C. That is ${description}.`
}

const f = prompt("Enter a temperature in farhenheit"); // variable f contains prompt
const description = describeTemperature(f); // description variable contains describeTemperature function
alert(description);
