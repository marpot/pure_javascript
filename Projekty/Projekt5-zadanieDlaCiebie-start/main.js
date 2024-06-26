// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli 
//tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)


const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]
const divMessage = document.querySelector("div");

const showMessage = ('input', (e) => {
    const typedPassword = e.target.value.toLowerCase();
    
    for(let i = 0; i < passwords.length; i++){
        if (typedPassword === passwords[i].toLowerCase()) {
            divMessage.textContent = messages[i];
            return;
        }
    }

    divMessage.textContent = "";
})
showMessage({ target : input });
input.addEventListener("input", showMessage);



