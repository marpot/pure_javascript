//Typy danych
//Jest 7 typów wbudowanych

//Typy proste
//string, number, boolean, null, undefined, symbol

//Typy referencyjne
//Obiekty: obiekt, funkcja, tablica





//String - łańcuch znaków
let userName = "Tymoteusz";
let numer = 1;

// typeof - operator który zwraca informacje o typie
console.log(typeof userName);
console.log(typeof numer);
console.log(typeof userName);

//Numer - liczba(bez podziału na integer, float, decimal)
typeof 222.222;
typeof 1000;
typeof 3.2e10;
typeof NaN;
typeof(2.2 * "a");

//Boolean - wartosc logiczna
typeof true;
typeof false;
typeof(2 == 3);

typeof undefined;
let dateFirstLogin;
typeof dateFirstLogin; //typ undefined

//Null - nie posiada(jedna wartosc)
//Najczesciej przez programiste
let userSecondName = null;
typeof null;

//Symbol - nowy typ w ES6
typeof Symbol();

//Typ referencyjny - obiekty
typeof {};
typeof

function() {};
typeof [];

let primitiveType1 = 20;
let primitiveType2 = primitiveType1;

//Diwie zmienne które mają 20. Dwie wartości 20.

primitiveType1 = 30;
console.log(primitiveType2);

//tylko jeden obiekt
let referenceValue1 = [1, 2, 3];
let referenceValue2 = referenceValue1;


referenceValue1[3] = 4;
referenceValue2[4] = 10;

console.log(referenceValue2);