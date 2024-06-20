/*Zadanie 1: Elementy tablicy

Mając tablicę zawierającą 3 liczby całkowite np. const numbers = [5, 10, 15];, 
sprawdź, czy suma pierwszego i ostatniego elementu tablicy jest większa niż drugi element tej tablicy. 
Jeżeli tak, wyświetl w konsoli informację "Suma pierwszego i ostatniego elementu jest większa niż drugi element", 
w przeciwnym razie wyświetl "Suma pierwszego i ostatniego elementu nie jest większa niż drugi element".
Sprawdź czy Twojej rozwiązanie zadziała prawidłowo dla innych wariantów (czyli czy jest uniwersalne). */

console.log("------- ZADANIE 1 --------");

const numbers = [5,10,15];

console.log("Pierwszy element tablicy", numbers[0]);

console.log("Drugi element tablicy", numbers[1]);

console.log("Trzeci element tablicy", numbers[2]);

let SumaPierwszy_Trzeci = numbers[0] + numbers[2];
console.log("Suma pierwszego i trzeciego elementu:", SumaPierwszy_Trzeci);

if(SumaPierwszy_Trzeci > numbers[1]){
    console.log("Suma pierwszego i ostatniego elementu jest większa niż drugi element");
} else{
    console.log("Suma pierwszego i ostatniego elementu nie jest większa niż drugi element");
}

/*adanie 2: Porównanie długości tablic

Mając  dwie tablice np. const firstArray = [1, 2, 3]; i const secondArray = [4, 5];, 
sprawdź, która z nich jest dłuższa, a następnie wyświetl odpowiedni komunikat w konsoli, np. 
"Pierwsza tablica jest dłuższa" lub "Druga tablica jest dłuższa". Jeśli tablice mają taką samą 
długość, wyświetl "Tablice mają taką samą długość".  Sprawdź czy 
Twojej rozwiązanie zadziała prawidłowo dla innych wariantów (czyli czy jest uniwersalne). */

console.log("------- ZADANIE 2 --------");

const firstArray = [1, 2, 3,];
const secondArray = [4, 5, 6];

console.log(" Długość pierwszej tablicy", firstArray.length);
console.log(" Długość drugiej tablicy", secondArray.length);

if(firstArray.length > secondArray.length)
    {
    console.log("Pierwsza tablica jest dłuższa");
} else if (firstArray.length < secondArray.length) {
    console.log("Druga tablica jest dłuższa");
  } else {
    console.log("Tablice mają taką samą długość");
  }

/* Zadanie 3: Sprawdzanie zawartości tablicy

Mając daną tablicę  sprawdź, czy pierwszy element tablicy to "apple". Jeżeli tak, wyświetl w konsoli 
informację "Pierwszy element tablicy to 'apple'", 
w przeciwnym razie wyświetl "Pierwszy element tablicy, to nie 'apple'". Sprawdź oba warianty poniżej: */

const fruits = ["pear", "banana", "orange"];
const fruits_v2 = ["apple", "banana", "orange"];

if (fruits[0] == "apple"){
    console.log("Pierwszy element tablicy to apple");
} else {
    console.log("Pierwszy element tablicy to nie apple");
}
