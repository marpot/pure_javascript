// Zadanie 1: Obliczanie średniej

// Zadeklaruj funkcję o nazwie "calculateAverage", która przyjmuje tablicę liczb jako argument i 
//zwraca średnią arytmetyczną tych liczb. Wykorzystaj pętlę for do obliczenia sumy liczb, a następnie podziel 
//tę sumę przez długość tablicy.

// Przykład użycia: calculateAverage([1, 2, 3, 4, 5]); // zwraca 3

// const oceny = [1, 2, 3, 4, 5];


// function calculateAverage(oceny){
//     let suma = 0;
//     for(let i=0; i < oceny.length; i++){
//         suma += oceny[i];
//     }
//     return suma / oceny.length;
// }

// const average = calculateAverage(oceny);
// console.log(average);


// Zadanie 2: Filtracja liczb parzystych

// Zadeklaruj funkcję o nazwie "filterEvenNumbers", która przyjmuje tablicę liczb 
//jako argument i zwraca nową tablicę zawierającą tylko liczby parzyste. Wykorzystaj pętlę for do 
//iteracji po elementach tablicy oraz instrukcje warunkowe do sprawdzenia, czy liczba jest parzysta.

// Przykład użycia: filterEvenNumbers([1, 2, 3, 4, 5, 6]); // zwraca [2, 4, 6]

// const numbers = [1, 2, 3, 4, 5, 6];

// function filterEvenNumbers(numbers) {
//     let evenNumbers = [];

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         }
//     }
//     return evenNumbers;
// }

// const liczby_parzyste = filterEvenNumbers(numbers);
// console.log(liczby_parzyste);



// Zadanie 3: Liczba wystąpień elementu w tablicy

// Stwórz funkcję "countOccurrences" za pomocą przypisania funkcji anonimowej 
//do zmiennej, która przyjmuje dwa argumenty: tablicę "array" oraz wartość "element". Funkcja powinna zwracać 
//liczbę wystąpień "element" w tablicy "array". Wykorzystaj pętlę for do iteracji po elementach tablicy oraz instrukcje warunkowe 
//do sprawdzenia, czy element tablicy zgadza się z podaną wartością.

// Przykład użycia: countOccurrences(["apple", "banana", "apple", "orange", "banana"], "banana"); // zwraca 2


let countOccurrences = function (array, element) {
    let count = 0; 

    for (let i = 0; i < array.length; i++) { 
        if (array[i] === element) {
            count++;
        }
    }
    return count;
}

const fruits = ["apple", "banana", "apple","apple","apple", "orange", "banana"];
const appleCount = countOccurrences(fruits, "apple");
console.log(`Ilość jabłek ${appleCount}`); 

