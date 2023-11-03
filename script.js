function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unit = document.getElementById("unit").value;
    const resultElement = document.getElementById("result");

    const temperatureValue = temperatureInput.value.trim();

    if (temperatureValue === "") {
        resultElement.innerHTML = "<strong>Please enter a value first</strong>";
        temperatureInput.style.borderColor = "red";
        return;
    }

    if (isNaN(temperatureValue)) {
        resultElement.innerHTML = "<strong>Please enter a valid number.</strong>";
        temperatureInput.style.borderColor = "red";
        return;
    }

    temperatureInput.style.borderColor = "";

    const temperature = parseFloat(temperatureValue);

    let convertedTemperatures = {};

    switch (unit) {
        case "celsius":
            convertedTemperatures["Celsius"] = temperature;
            convertedTemperatures["Fahrenheit"] = (temperature * 9/5) + 32;
            convertedTemperatures["Kelvin"] = temperature + 273.15;
            break;
        case "fahrenheit":
            convertedTemperatures["Fahrenheit"] = temperature;
            convertedTemperatures["Celsius"] = (temperature - 32) * 5/9;
            convertedTemperatures["Kelvin"] = (temperature - 32) * 5/9 + 273.15;
            break;
        case "kelvin":
            convertedTemperatures["Kelvin"] = temperature;
            convertedTemperatures["Celsius"] = temperature - 273.15;
            convertedTemperatures["Fahrenheit"] = (temperature - 273.15) * 9/5 + 32;
            break;
    }

    let resultText = "<strong>Converted Temperatures:</strong> ";
    for (const unit in convertedTemperatures) {
        resultText += `${unit}: ${convertedTemperatures[unit].toFixed(2)} `;
    }

    resultElement.innerHTML = resultText;
}