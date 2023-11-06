const listaSpesa = [
    "pane",
    "pasta",
    "shampo",
    "acqua",
    "carta igenica"
];

let i = 0;
let listElement = "";
// while (i < listaSpesa.length) {
    while (listaSpesa[i]) {
    const listItem =  listaSpesa[i];
    listElement += `<li>${listItem}</li>`;
    i++;
}

document.getElementById("lista").innerHTML = listElement;