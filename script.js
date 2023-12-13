let dark = document.getElementById("dark");
let light = document.getElementById("light");
let celsius = document.getElementById("Celsius");
let fahrenheit = document.getElementById("Fahrenheit");
let footer = document.getElementById("footer")

// THEME BUTTONS
dark.addEventListener("click", function () {
  document.body.style.backgroundColor = "#202020";
  document.getElementById("h1").style.color = "#FFFFFF";
  document.getElementById("joke").style.color = "#00FFFF";
  document.getElementById("theme").style.color = "#FFFFFF";
  document.getElementById("footer").style.color = "#FFFFFF"
});

light.addEventListener("click", function () {
  document.body.style.backgroundColor = "#FFFFFF";
  document.getElementById("h1").style.color = "#202020";
  document.getElementById("joke").style.color = "#FF0000";
  document.getElementById("theme").style.color = "#202020";
  document.getElementById("footer").style.color = "#202020"
});

// TEMPERATURE CONVERTER

celsius.addEventListener("input", function () {
  let tempCelsius = this.value;
  if (tempCelsius) {
    let result = (tempCelsius * 9) / 5 + 32;
    fahrenheit.value = `${result}° F`;
  } else {
    fahrenheit.value = null;
  }
});

fahrenheit.addEventListener("input", function () {
  let tempFahrenheit = this.value;
  if (tempFahrenheit) {
    let result = ((tempFahrenheit - 32) * 5) / 9;
    celsius.value = `${result}° C`;
  } else {
    celsius.value = null;
  }
});