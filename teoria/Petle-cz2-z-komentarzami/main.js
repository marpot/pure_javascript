// Pętla w pętli

// for (let i = 0; i < 3; i++) {
//  for (let j = 0; j < 10; j++) {
//   console.log(`zmienna i czyli ${i} pomnożona przez zmienną j czyli ${j} da wynik ${i * j}`);
//  }
// }



// Pętla na tablicy

// Przykład1 wyświetlamy wiek użytkownika

// const usersAge = [19, 18, 15, 45, 34, 33, 25];

// const userName = ["Jarek", "Marek", "Czarek", "Darek"];

// // const drinkName = ['Coca-cola', 'Pepsi', 'Sprite', 'Mirinda'];

// for (let i = 0; i < usersAge.length; i++) {
//  console.log(`użytkownik o indeksie ${i} jest w wieku ${usersAge[i]}`);

//  console.log('użytkownik o indeksie ' + i + ' jest w wieku ' + usersAge[i]);   //Bez ` grawisa to samo co wyżej
// }
                       
// for (let i = 0; i < userName.length; i++) {
//     console.log(`użytkownik o indeksie ${i} ma na imię ${userName[i]}`);
// }

// for (let i = 0; i <= drinkName.length; i++){
//     console.log(`Dzisiaj w barze mamy do wyboru następujace napoje: ${drinkName}`);
// }

//  Przykład2 - obliczmy wiek użytkownika

// const usersDateBirth = [2000, 1992, 1932, 1980, 1981, 1971, 2009];
// const currentYear = 2024;

// for (let i = 0; i < usersDateBirth.length; i++) {
//  const userAge = currentYear - usersDateBirth[i];
// //  console.log(userAge);
//  console.log(`wiek użytkownika numer ${i + 1} to ${userAge}`);
// }

//  Przykład3 - for + instrukcja warunkowe alert

// const guest = ["piłkarz", "kucharz", "murarz", "programista", "polityk", "pisarz", "magazynier", "emeryt"];

// for (let i = 0; i < guest.length; i++) {

//  if (guest[i] === "programista") {
//   console.log("przepraszam nie ma już miejsce (nie wpuszczać, (programiści to nudziarze - tylko nie mówić) ")
//  } else if (guest[i] === "polityk") {
//   console.log("Ojej jaka szkoda, nie ma już miejsc (po żadnym pozorem nie wpuszczać! Zepsują każdą imprezę)");
//  } else {
//   console.log("witamy Panie " + guest[i] + ", zapraszamy!");
//  }

// }

// const cryptocurrency = ["bitcoin", "litecoin", "etherum","dashcoin","dogecoin", "scamcoin"];

// for(let i = 0; i < cryptocurrency.length; i++){
//     if (cryptocurrency[i] === "scamcoin" ){
//         console.log("Nie przyjmujemy wypłat w scamcoinie!");
//     } else {
//         console.log(`Przyjmujemy wpłaty w " ${cryptocurrency[i]}`);
//     } 
// }

// PĘTLA FOR - OF (ES6)

const colors = ["red", "green", "black", "yellow", "white", "gold", "silver", "brown"]

for (const color of colors) {
 console.log("mój ulubiony kolor to:" + color);
}