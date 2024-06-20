/* Zadanie 1: Obliczanie średniej

Zadeklaruj funkcję o nazwie "calculateAverage", która przyjmuje tablicę liczb jako argument i
zwraca średnią arytmetyczną tych liczb. Wykorzystaj pętlę for do obliczenia sumy liczb, a następnie podziel
tę sumę przez długość tablicy.

Przykład użycia: calculateAverage([1, 2, 3, 4, 5]); // zwraca 3 */

const { element } = require("three/examples/jsm/nodes/Nodes.js");


//DO SPRAWDZENIA CZY DOBRZE
talica1 = [1,2,3,4,5];
function calculateAverage(tablica1){
    let suma = 0;
    for (let i = 0; i < tablica1.length; i++){
        suma += tablica1[i];
    }
    let srednia_arytmetyczna = 0;
    return srednia_arytmetyczna;
}

const liczby = [1, 2, 3, 4, 5];
console.log(calculateAverage(liczby)); // 3

/* Zadanie 2: Filtracja liczb parzystych

Zadeklaruj funkcję o nazwie "filterEvenNumbers", która przyjmuje tablicę liczb jako argument i zwraca nową tablicę 
zawierającą tylko liczby parzyste. Wykorzystaj pętlę for do iteracji po elementach tablicy oraz instrukcje warunkowe do 
sprawdzenia, czy liczba jest parzysta.

Przykład użycia: filterEvenNumbers([1, 2, 3, 4, 5, 6]); // zwraca [2, 4, 6]
*/

// function filter_even_numbers(numbers){
//     let evenNumbers = [];

//     for(let i=0; i < numbers.length; i++){
//         if (numbers[i] % 2 === 0){
//             evenNumbers.push(numbers[i]);
//         }
//     }

//     return evenNumbers;
// }

// console.log(filter_even_numbers([1,2,3,4,5,6]));


/* Zadanie 3: Liczba wystąpień elementu w tablicy

Stwórz funkcję "countOccurrences" za pomocą przypisania funkcji anonimowej do zmiennej,
 która przyjmuje dwa argumenty: tablicę "array" oraz wartość "element". Funkcja powinna zwracać liczbę wystąpień 
 "element" w tablicy "array". Wykorzystaj pętlę for do iteracji po elementach tablicy oraz instrukcje warunkowe do 
 sprawdzenia, czy element tablicy zgadza się z podaną wartością.

Przykład użycia: countOccurrences(["apple", "banana", "apple", "orange", "banana"], "banana"); // zwraca 2


 */

const countOccurrences = function(array, element) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            count++;
        }
    }
    return count;
};

console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana"], "banana"));
console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana"], "apple"));  
console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana"], "orange")); 
console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana"], "grape"));  
