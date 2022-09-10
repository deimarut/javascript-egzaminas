/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const outputElement = document.getElementById('output');
const formElement = document.getElementById('form');
const searchElement = document.getElementById('search');
const buttonElement = document.getElementById('submit-btn');


formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const lb = parseInt(searchElement.value) * 2.2046;
    const g = parseInt(searchElement.value) / 0.0010000;
    const oz = parseInt(searchElement.value) * 35.274;

    const ulElement = document.createElement('ul');

    const liElementLB = document.createElement('li');
    const liElementG = document.createElement('li');
    const liElementOZ = document.createElement('li');

    liElementLB.textContent = `Jūsų nurodyti kilogramai: ${searchElement.value}, svarais bus: ${lb}`;
    liElementG.textContent = `Jūsų nurodyti kilogramai: ${searchElement.value}, gramais bus: ${g}`;  
    liElementOZ.textContent = `Jūsų nurodyti kilogramai: ${searchElement.value}, uncijomis bus: ${oz}`;

    ulElement.appendChild(liElementOZ);
    ulElement.appendChild(liElementG);
    ulElement.appendChild(liElementLB);

    outputElement.appendChild(ulElement);
});