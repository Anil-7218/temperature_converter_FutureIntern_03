function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;

    let celsius, fahrenheit, kelvin;

    if (inputUnit === 'Celsius') {
        celsius = inputValue;
        fahrenheit = (inputValue * 9/5) + 32;
        kelvin = inputValue + 273.15;
    } else if (inputUnit === 'Fahrenheit') {
        celsius = (inputValue - 32) * 5/9;
        fahrenheit = inputValue;
        kelvin = celsius + 273.15;
    } else if (inputUnit === 'Kelvin') {
        celsius = inputValue - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = inputValue;
    }

    document.getElementById('celsiusValue').textContent = celsius.toFixed(2);
    document.getElementById('fahrenheitValue').textContent = fahrenheit.toFixed(2);
    document.getElementById('kelvinValue').textContent = kelvin.toFixed(2);
}
