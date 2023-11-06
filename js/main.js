let itemInput = document.getElementById("groceries");
const listaSpesa = [
    "pane",
    "pasta",
    "shampo",
    "acqua",
    "carta igienica"
];
let i = 0;
let listElement = "";
while (i < listaSpesa.length) {
    //while (listaSpesa[i]) {
    const listItem = listaSpesa[i];
    listElement += `<li>${listItem}</li>`;
    i++;
};

document.getElementById("lista").innerHTML = listElement;

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


document.getElementById("remover").addEventListener("click", function () {
    let item = itemInput.value;
    console.log(item);
    // listaSpesa.push(item);
    console.log(listaSpesa.length);

    let i = 0;
    let listElement = "";
    while (i < listaSpesa.length) {
        //while (listaSpesa[i]) {
        const listItem = listaSpesa[i];
        if (listItem == item) {
            listaSpesa.splice(i, 1);
            continue;
        };
        listElement += `<li>${listItem}</li>`;
        i++;
    };

    document.getElementById("lista").innerHTML = listElement;

});