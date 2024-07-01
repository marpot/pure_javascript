const spnText = document.querySelector('.text');
const txt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

 //Parametry
 let indexText = 0;
 const time = 40;

//Implementacja
 const addLetter = () => {
    spnText.textContent +=  txt[indexText];
    indexText++;
    if(indexText === txt.length) clearInterval(indexTyping);
 }
 const indexTyping = setInterval(addLetter, time);
