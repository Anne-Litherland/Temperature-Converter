/**
* @param {number} f temperature in °F
* @returns {number} temperature in °C
*/
function convertToCelcius(f) {
    return (f-32) * (5 / 9);
}

/**
* @param {number} f temperature in °F
* @return {string} description 
*/
function describeTemperature(f) {
    const c = convertToCelcius(f);

    let description = "";

    if (c < 0) {
        description = "very cold";
    } else if (c < 20) {
        description = "cold";
    } else if (c < 30) {
        description = "warm";
    } else if (c < 40) {
        description = "hot";
    } else (c < 50) {
        description = "very hot";
    }

    return `${f}°F is ${c}°C. That is ${description}.`;
}

const f = prompt("Enter a temperature in farhenheit");
const description = describeTemperature(f);
alert(description);