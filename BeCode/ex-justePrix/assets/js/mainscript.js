console.log("mainscript.js relatif au jeu du Juste Prix loaded");
let messageAAfficher = "message";
let tryCount = 0;
let minValue = 20;
let maxValue = 80;
let random = () => {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
let gagne = false;
let justePrix;
justePrix = () => {
    let nombre;
    tryCount = 0;
    let justePrixNbr;
    nombre = random(20, 80);
    while (justePrixNbr != nombre) {
        console.log(nombre);
        justePrixNbr = window.prompt('Essayez de deviner le nombre entre 20 et 80');
        if (justePrixNbr > nombre) {
            window.alert(`${justePrixNbr}. C'est moins !`);
            tryCount++;
        } else if (justePrixNbr < nombre) {
            window.alert(`${justePrixNbr}. C'est plus !`);
            tryCount++;
        }
    }
    window.confirm(`Félicitations, vous avez gagné suite à ${tryCount} tentatives`);
};
let start = document.getElementById("start");
start.addEventListener('click', justePrix);