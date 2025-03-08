function convertTemperature() {
  const temp = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  let result = "";

  if (isNaN(temp)) {
    result = "Please enter a valid temperature.";
  } else {
    if (unit === "celsius") {
      const fahrenheit = (temp * 9/5) + 32;
      result = `${temp}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
    } else if (unit === "fahrenheit") {
      const celsius = (temp - 32) * 5/9;
      result = `${temp}°F is equal to ${celsius.toFixed(2)}°C.`;
    }
  }

  document.getElementById("result").innerHTML = result;
}
