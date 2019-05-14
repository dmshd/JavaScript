console.log("mainscript.js loaded");

//Exercice effectue avec l'aide d'un tuto consultable via l'url ci dessous
// https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript

//Selectors
let carte = document.getElementsByClassName("card");
const deck = document.querySelector(".deck");
let lesCartes = [...carte];  //Découverte du spread operator !!! 


//Functions
let randomColor = () => {
/////////////////////////
    return '#'+'0123456789abcdef'.split('').map(function(v,i,a){
        return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
}

//Ouvert, affiche, desactive
let afficheLaCarte = () => {
////////////////////////////
    this.classList.toggle("ouvert");
    this.classList.toggle("affiche");
    this.classLit.toggle("desactive");
}
//Le mélange de Ficher-Yates (ou mélange de Knuth)
//Plus d'info : https://fr.wikipedia.org/wiki/M%C3%A9lange_de_Fisher-Yates
let melange = (array) => {
//////////////////////////
    let indexActuel = array.lenght, valeurTemporaire, indexAleatoire;
    while (indexActuel !== 0) {
        indexAleatoire = Math.floor(Math.random() * indexActuel);
        indexActuel -= 1;
        valeurTemporaire = array[indexActuel];
        array[indexActuel] = array[indexAleatoire];
        array[indexAleatoire] = valeurTemporaire;
    }
    return array;
}

//Le plateau de jeu
let startGame = () => {
///////////////////////
    let cartesMelangees = melange(lesCartes);
    let cartesMelangeesLength = cartesMelangees.lenght;
    for (let i = 0; i < cartesMelangees; i++) {
        [].forEach.call(cartesMelangees, function(item){
            deck.appendChild(item);
        });
    }
}
window.onload = startGame();


//Boucle pour ajouter un eventListener sur chaque carte
let lesCartesLength = lesCartes.length;
console.log(lesCartesLength);

for (let i = 0; i < lesCartesLength; i++) {
    lesCartes[i].addEventListener("click", afficheLaCarte);
}