// tutaj rozwiązanie


/*Lista jest już stworzona w strukturze html, ale domyślnie niewidoczna (display: 
none). 
- Po kliknięciu na przycisk (button już jest) mamy sprawić by każdy element 
li był widoczny (ustawienie własciwości display na block)
- by po każdym kliknięciu w button wielkość fonta była o jeden większa od 
początkowego (ustaw w JS wartość początkową na 10px, użyj zmiennej).

Nie zmieniaj nic w html i css. Mozesz zmieniać tylko plik JavaScript.

Zrób to zadanie (najpierw) za pomocą pętli i (potem) za pomocą metody 
forEach. */


let list_elements = document.querySelectorAll("li");
const button = document.querySelector("button");

let font_size = 10;

button.addEventListener("click", function(){
    makeVisible();
    zoom(1);
});

function makeVisible(){
    for(let i=0; i < list_elements.length; i++){
        list_elements[i].style.display = 'block';
        // list_elements[i].style.fontSize = "10px";
    }

    /* ROZWIĄZANIE ZA POMOCĄ PĘTLI FOREACH*/
    // list_elements.forEach(li => li.style.display = 'block');
}

function zoom(incraseBy){
    /* ROZWIĄZANIE ZA POMOCĄ PĘTLI FOR */
    for(let i = 0; i < list_elements.length; i++){
        let currentFontSize = window.getComputedStyle(list_elements[i]).fontSize;
        if( currentFontSize == '0px'){
            list_elements[i].style.fontSize = font_size + incraseBy + 'px';
        } else{
            let newFontSize = parseFloat(currentFontSize) + incraseBy + 'px';
            list_elements[i].style.fontSize = newFontSize;
        }
        
    }
    

    /* ROZWIĄZANIE ZA POMOCĄ PĘTLI FOREACH*/
    list_elements.forEach(li => {
        let currentFontSize = window.getComputedStyle(li).fontSize;
        let newFontSize = parseFloat(currentFontSize) + incraseBy + 'px';
        li.style.fontSize = newFontSize;
    });

}

