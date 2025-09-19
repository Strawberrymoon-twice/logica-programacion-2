let celsiusTemperature = 0;

/*
*Función que solicita los datos
*/
function requestTemperature(celsiusTemperature) {
    do {
    celsiusTemperature = Number(prompt("Ingresa la temperatura en grados Celsius, por ej: 28.4"));
    if (isNaN(celsiusTemperature)) {
        alert("Por favor ingresa un núemro válido");
    }
} while (isNaN(celsiusTemperature));
return celsiusTemperature;
}

/*
*Función que convierte la temperatura a Kelvin
*/
function convertKelvin(celsiusTemperature) {
    let kelvinTemperature = celsiusTemperature + 273.15;
    return kelvinTemperature;
}

/*
*Función que convierte la temperatura a Fahrenheit
*/
function convertFahrenheit(celsiusTemperature) {
    let fahrenheitTemperature = (celsiusTemperature * 9/5)+32;
    return fahrenheitTemperature;
}

/*
*Función que imprime resultados
*/
function printResults(celsiusTemperature) {
    console.log(`La temperatura en Kelvin es: ${convertKelvin(celsiusTemperature)} K`);
    console.log(`La temperatura en grados Fahrenheit es: ${convertFahrenheit(celsiusTemperature)} °F`);
}

//Llamado de las funciones
celsiusTemperature = requestTemperature (celsiusTemperature);
printResults(celsiusTemperature);
