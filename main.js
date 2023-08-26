const degree = document.getElementById('degree');
const type = document.getElementById('type');
const result = document.getElementById('result');
const convertBtn = document.querySelector('.btn');

convertBtn.addEventListener('click', function () {
    let typeValue = type.value;

    if (degree.value == "") {
        alert("Please Enter some Value");
    }
    else {
        let degreeValue = Number.parseFloat(degree.value);
        if (typeValue == 'celsius') {
            result.innerHTML = celsiusToFahrenheit(degreeValue) + " & " + celsiusToKelvin(degreeValue);
            changeColor(result);
        }
        else if (typeValue == 'fahrenheit') {
            result.innerHTML = fahrenheitToCelsius(degreeValue) + " & " + fahrenheitToKelvin(degreeValue);
            changeColor(result);

        }
        else if (typeValue == 'kelvin') {
            result.innerHTML = kelvinToCelsius(degreeValue) + " & " + kelvinToFahrenheit(degreeValue);
            changeColor(result);

        }
        else {
            alert("Something went wrong")
        }
    }
})

// funtions that converts temperature
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit.toFixed(2) + "°F";
}
function celsiusToKelvin(celsius) {
    let kelvin = (celsius + 273.15);
    return kelvin.toFixed(2) + "K";
}
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius.toFixed(2) + "°C";
}
function fahrenheitToKelvin(fahrenheit) {
    let kelvin = ((fahrenheit - 32) * 5 / 9) + 273.15;
    return kelvin.toFixed(2) + "K";
}
function kelvinToCelsius(kelvin) {
    let celsius = (kelvin - 273.15);
    return celsius.toFixed(2) + "°C";
}
function kelvinToFahrenheit(kelvin) {
    let fahrenheit = ((kelvin - 273.15) * 9 / 5) + 32;
    return fahrenheit.toFixed(2) + "°F";
}

// function to change the color of result
function changeColor(element){
    element.style.color = "red";
}