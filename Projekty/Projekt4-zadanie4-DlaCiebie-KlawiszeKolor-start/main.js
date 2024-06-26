/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  console.log(e.keyCode, e.which);
  // 38 - strzałka do góry
  // 40 - strzalka w dół

  // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza
  // strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0)) 
  // tutaj twój kod
  // wersja 1 - instrukcja if
  // wersja 2 - instrukcja switch


/* ROZWIĄZANIE Z INSTRUKCJĄ IF */
//   // Strzałka do góry - ma zmieniać stopniowo kolor na biały
//   if(e.keyCode === 38 && red<=255){
//       red += 3;
//       green += 3;
//       blue +=3;
//       document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
//     // Stzałka w dół - ma zmieniać stopniowo kolor na czarny
//   } else if(e.keyCode === 40 && red >= 0){
//         red -= 3;
//         green -= 3;
//         blue -= 3;
//         document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//   }

/* ROZWIĄZANIE Z INSTRUKCJĄ SWITCH */

  switch (e.keyCode){
    case 38: 
      console.log("strzałka w górę");
      document.body.style.backgroundColor = `rgb(${red<=255 ? ++red : red}, ${green<= 255 ? ++green :green}, ${blue<=255 ? ++blue :blue})`;
      break;

    case 40:
      console.log("strzałka w dół");
      document.body.style.backgroundColor = `rgb(${red>0 ? --red : red}, ${green > 0 ? --green :green}, ${blue > 0 ? --blue :blue})`;
      break;
  }

}

window.addEventListener('keydown', changeColor);
