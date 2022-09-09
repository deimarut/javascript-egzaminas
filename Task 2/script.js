/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const buttonElement = document.getElementById("btn__element");
const countElement = document.getElementById("btn__state");

let clicks = 0;

buttonElement.onclick = () => {
  clicks += 1;
  countElement.innerHTML = clicks;
};