/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const convMF = document.getElementById("conv-mf");
const convLG = document.getElementById("conv-lg");
const convKP = document.getElementById("conv-kp");

btnEl.addEventListener("click", function () {
  const inputValue = inputEl.value;
  console.log(inputEl.value);
  // Meters to feet
  const lengthEl = `${inputValue} meters = ${metersToFeet(
    inputValue
  )} feet | ${inputValue} feet = ${feetTometers(inputValue)} meters`;
  convMF.textContent = lengthEl;

  //Liters to Gallons
  const volumEl = `${inputValue} liters = ${litersToGallons(
    inputValue
  )} gallons | ${inputValue} gallons = ${gallonsToliters(inputValue)} liters`;
  convLG.textContent = volumEl;

  //Kilos to Pounds
  const massEl = `${inputValue} kilos = ${kilosToPounds(
    inputValue
  )} pounds | ${inputValue} pounds = ${poundToKilos(inputValue)} kilos`;
  convKP.textContent = massEl;
});

function metersToFeet(number) {
  return (number * 3.281).toFixed(3);
}
function feetTometers(number) {
  return (number / 3.281).toFixed(3);
}
function litersToGallons(number) {
  return (number * 0.264).toFixed(3);
}
function gallonsToliters(number) {
  return (number / 0.264).toFixed(3);
}
function kilosToPounds(number) {
  return (number * 2.204).toFixed(3);
}
function poundToKilos(number) {
  return (number / 2.204).toFixed(3);
}
