const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Jagienka","Jurek", "Dobrawa", "Daria", "Asia", 
    "Kira", "Marysia", "Anastazja"];

const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy,myślę",
    "Szczerze uważam", 
    "Na 100% twierdzę", "Jestem pewien"];


// console.log(names[index]);

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefixs.length);
    div.textContent = `${prefixs[Math.floor(Math.random() * prefixs.length)]}, że najlepsze będzie imię ${names[indexName]}`;
}

btn.addEventListener('click', nameGenerator);

