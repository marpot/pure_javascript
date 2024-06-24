let size = 10;
let orderElement = 1;

const init = () => {
    const button = document.createElement('button');
    const buttonReset = document.createElement('button');
    button.innerText = "Dodaj 10 elementów listy";
    buttonReset.innerText = "Wyczyść";
    const list = document.createElement('ul');
    document.body.appendChild(button);
    document.body.appendChild(buttonReset);
    document.body.appendChild(list);

    button.addEventListener("click", createLiElements);
    buttonReset.addEventListener("click", cleanList);
}

const createLiElements = () => {
    const list = document.querySelector('ul');
    for (let i = 0; i<10; i++){
        const li_element = document.createElement("li");
        li_element.innerText = `Element ${orderElement++}`;
        li_element.style.fontSize = `${size++}px`;
        list.appendChild(li_element);
    }
}

const cleanList = () => {
    const list = document.querySelector('ul');
    list.innerHTML = "";
    size = 10;
    orderElement = 1;
}

init()