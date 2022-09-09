/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const outputElement = document.getElementById("output");
const buttonElement = document.getElementById("btn");
const messageElement = document.getElementById("message");

const ENDPOINT = fetch('https://api.github.com/users'); 

buttonElement.addEventListener('click', () => {
    outputElement.removeChild(messageElement);

    ENDPOINT
    .then((res) => res.json())
    .then((data) => {
        data.forEach(userdata => {
            getUsers(userdata);
        }) 
});
});

const getUsers = (userdata) => {
    const divElement = document.createElement('div');

    const textElement = document.createElement('p');
    const loginInfo = userdata.login;
    textElement.textContent = loginInfo;
    
    const imgElement = document.createElement('img');
    const imgSrc = userdata.avatar_url;
    imgElement.src = imgSrc;
    
    divElement.appendChild(textElement);
    divElement.appendChild(imgElement);
    
    outputElement.appendChild(divElement);

    divElement.style.backgroundColor = "lightgray"; 
    textElement.style.color = "rgb(187, 48, 233)";
    imgElement.style.margin = "20px";
};
