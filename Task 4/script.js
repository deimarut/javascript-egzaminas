/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const outputElement = document.getElementById("output");

fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
        data.forEach(carData => {
            ourCarsList(carData);
        }); 
});

const ourCarsList = (carData) => {
    const divElement = document.createElement('div');

    const nameElement = document.createElement('h2');
    const carBrand = carData.brand;
    nameElement.textContent = carBrand;

    const modelElement = document.createElement('p');
    const carModel = carData.models;
    modelElement.textContent = carModel;

    divElement.appendChild(nameElement);
    divElement.appendChild(modelElement);

   outputElement.appendChild(divElement);
}