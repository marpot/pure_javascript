// script.js

// Kolory tła
const colors = ['#ff9a9e', '#fad0c4', '#a1c4fd', '#c1c4e9', '#d4a9ff', '#4e54c8', '#8f94fb'];
let currentColorIndex = 0;

// Funkcja zmieniająca kolor tła
function changeBackground() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const newColor = colors[currentColorIndex];
    document.querySelector('.area').style.background = newColor;
    document.querySelector('.area').style.background = `-webkit-linear-gradient(to left, ${newColor}, #4e54c8)`;
}

// Ustawienie zmiany tła co 5 sekund
setInterval(changeBackground, 5000);

// Efekt pisania na tytułach
document.addEventListener('DOMContentLoaded', function () {
    const texts = ['Web design', 'is simple'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelectorAll('.context h1')[count].textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
        }
        setTimeout(type, 200);
    })();

    type();
});

// Funkcja przewijania do formularza
function scrollToForm() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

