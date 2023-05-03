let opcion1 = document.getElementById("opcion1");
let pop1 = document.getElementById("pop1");
let cerrar1 = document.getElementById("cerrar");

opcion1.addEventListener("click", () => {
    pop1.showModal()
});

cerrar1.addEventListener("click", () => {
    pop1.close();
});

