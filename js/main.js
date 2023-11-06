let itemInput = document.getElementById("groceries");
const listaSpesa = [
    "pane",
    "pasta",
    "shampo",
    "acqua",
    "carta igenica"
];


document.getElementById("adder").addEventListener("click", function () {
    let item = itemInput.value;
    console.log(item);
    listaSpesa.push(item);
    console.log(listaSpesa.length);

    let i = 0;
    let listElement = "";
    while (i < listaSpesa.length) {
        //while (listaSpesa[i]) {
        const listItem = listaSpesa[i];
        listElement += `<li>${listItem}</li>`;
        i++;
    };

    document.getElementById("lista").innerHTML = listElement;

});


let i = 0;
let listElement = "";
while (i < listaSpesa.length) {
    //while (listaSpesa[i]) {
    const listItem = listaSpesa[i];
    listElement += `<li>${listItem}</li>`;
    i++;
};

document.getElementById("lista").innerHTML = listElement;