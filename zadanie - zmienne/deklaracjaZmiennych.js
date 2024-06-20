/* Zadanie 1: Deklaracja zmiennych

1.1. Zadeklaruj zmienną o nazwie myVariable i przypisz jej wartość 10 (typ number).

1.2. Zadeklaruj zmienną o nazwie myName i przypisz jej wartość "Benedykt".

Uwaga: Obie zmienne mogą zmieniać wartości w programie, a więc nie mogą to być stałe. */

let myVariable = 10;
let myName = "Benedykt";
console.log("wartość zmiennej myVariable przed inkrementacją to:", myVariable)


/* Zadanie 2: Typy zmiennych

2.1. Jaki jest typ danych przechowywany w zmiennej myVariable?

2.2. Jaki jest typ danych przechowywany w zmiennej myName?

Uwaga: Oczywiście chodzi o typy, które zostały przypisane w Zadaniu 1 */

console.log(typeof myVariable);
console.log(typeof myName);

/* Zadanie 3: Zmiana wartości zmiennych */

//3.1. Zmień wartość zmiennej myVariable na 11. 
myVariable++;
console.log("zmienna myVariable po inkrementacji to teraz:", myVariable);

//3.2. Zmień wartość zmiennej myName na "Mieszko"
myName = "Mieszko";
console.log('Teraz wartość myName to: ', myName);

/* Zadanie 4: Operacje na zmiennych */

// 4.1. Utwórz nową zmienną o nazwie sum i przypisz jej wartość równą sumie myVariable i 5.

const sum = myVariable + 5;
console.log('Wartosc zmiennej sum to:', sum);

// 4.2. Utwórz zmienną o nazwie greeting i przypisz jej wartość równą konkatenacji myName i ", witaj w świecie JavaScript!".

const greeting = myName + ", witaj w świecie Javascript";
console.log(greeting);