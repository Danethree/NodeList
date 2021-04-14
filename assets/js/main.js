const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');//seleciona as tags <p>

const bodyStyles = getComputedStyle(document.body);//pega o fundo do body
const backgroundColorBody = bodyStyles.backgroundColor;
console.log(backgroundColorBody);



for(let p of ps)
{
    p.style.backgroundColor = backgroundColorBody;
    p.style.color ='#FFFFFF'


}
