let css = document.querySelector('h3');
let color1 = document.querySelector('.color1')
let color2 = document.querySelector('.color2')
let wrapper = document.getElementById('wrapper');
let randomBtn = document.getElementById("random");
setGradient(); // the function was made to be called during events but will run when set from the start.
function setGradient() {
    wrapper.style.background =
        'linear-gradient(to right, ' +
        color1.value + ', ' +
        color2.value +
        ')';

    css.textContent = wrapper.style.background + ';';
}
// Function that generates a random number from 0 to 255
function randomNumberGenerator() {
    return Math.round(Math.random() * 255);
}
// A function that converts the random number to a string with base 16
// The number will show as an hexadecimal value
function rgbToHex() {
    let hex = randomNumberGenerator().toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};
// Function that creates the final hex number by combining 
// 3 random rgbToHex values
function randomColorCombo() {
    let randomC = "#" + rgbToHex() + rgbToHex() + rgbToHex();
    return randomC;
}
// Function that changes the color1 and color2 values to the random ones
// then runs the first function 'setGradient' with the new values
function setGradientRandom() {
    color1.value = randomColorCombo();
    color2.value = randomColorCombo();
    setGradient()
}
randomBtn.addEventListener("click", setGradientRandom);
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);