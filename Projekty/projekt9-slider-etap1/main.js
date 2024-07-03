const slideList = [{
    img: 'images/img1.jpg',
    text: 'Pierwszy tekst',
},
{
    img: 'images/img2.jpg',
    text: 'Drugi tekst',
},
{
    img: 'images/img3.jpg',
    text: 'Trzeci tekst',
}];

//Interfejs
const time = 3000;
const image = document.querySelector(`img.slider`);
const h1 = document.querySelector(`h1.slider`);
const dots = [...document.querySelectorAll('.dots span')];
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if(active === slideList.length){
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

setInterval(changeSlide, time)
setInterval(changeDot, time)
