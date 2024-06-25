// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

//1. Wykryć kliknięcie
//2. Ustawić parametry kliknięcia gdzie nastpiło i wydrukować w konsoli

function isXEven(x) {
    return x % 2 === 0;
}

function isYEven(y) {
    return y % 2 === 0;
}



const h1 = document.querySelector('h1');
document.body.addEventListener('click', () => {
    const x = event.clientX;
    const y = event.clientY;

    console.log(`Kliknięto w pozycję: x=${x}, y=${y}`);
    
    if (isXEven(x) && isYEven(y)) {
        document.body.style.backgroundColor = "red";
    } else if (!isXEven(x) && !isYEven(y)) {
        document.body.style.backgroundColor = 'blue';
    } else {
        document.body.style.backgroundColor = 'green';
    }
});