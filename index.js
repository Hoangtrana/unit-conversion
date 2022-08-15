/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");

const numberEl = document.getElementById("number-el");
const numberEl2 = document.getElementById("number-el-2");
const metToFeEl = document.getElementById("metToFe-el");
const feToMeEl = document.getElementById("feToMe-el");

const liToGaEl = document.getElementById("litoGa-el");

const numberMassEl = document.getElementById("number-mass-el");
const kiToPoEl = document.getElementById("kiToPo-el");
const numberMassEl2 = document.getElementById("number-mass-el2");

const numberVolumnEl = document.getElementById("number-volumn-el");
const poToKiEl = document.getElementById("poToKi-el");
const gaToLiEl = document.getElementById("gaToli-el");
const numberVolumnEl2 = document.getElementById("number-volumn-el2");
btnEl.addEventListener("click", function () {
  console.log(inputEl.value);

  const convertNumber1 = metersToFeet(inputEl.value);
  const convertNumber2 = feetTometers(inputEl.value);
  const convertNumber3 = litersToGallons(inputEl.value);
  liToGaEl.textContent = convertNumber3;
  const convertNumber4 = gallonsToliters(inputEl.value);
  gaToLiEl.textContent = convertNumber4;
  const convertNumber5 = kilosToPounds(inputEl.value);
  const convertNumber6 = poundToKilos(inputEl.value);

  numberVolumnEl.textContent = inputEl.value;
  numberVolumnEl2.textContent = inputEl.value;
  console.log(convertNumber3);

  numberEl.textContent = inputEl.value;
  metToFeEl.textContent = convertNumber1;
  numberEl2.textContent = inputEl.value;
  feToMeEl.textContent = convertNumber2;

  numberMassEl.textContent = inputEl.value;
  kiToPoEl.textContent = convertNumber5;
  numberMassEl2.textContent = inputEl.value;
  poToKiEl.textContent = convertNumber6;
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
