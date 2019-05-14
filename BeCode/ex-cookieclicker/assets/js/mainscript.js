console.log("mainscript.js loaded");
//Vars
//Selecteurs
let thatButton = document.getElementById("click");
let thatDiv = document.getElementById("affichage");
let thatMultiButton = document.getElementById("multiplicateur");
//Ints 
let score = 0;
let clickValue = 1;
let multi = 1;
let multiPrix = 50;
let multiPrixMultiplier = 1.80;
//Noms des elements
let multiButtonName = "Multiplicateur";

        //Functions
let updateScore = () => {
    thatDiv.innerHTML = score;
};
let updateMultiButtonText = () => {
    if (multi === 1) {
        thatMultiButton.innerHTML = "Multiplicateur (50)";
    }else if (multi > 1) {
        thatMultiButton.innerHTML = `Multiplicateur [x${multi}] (${multiPrix})`;
    }
}
let cheatModifyScore = (a) => {
    score = a;
    updateScore();
    console.log(`CHEAT ON : Score = ${a}`);
}

//Initialisation
//Affichage
updateScore();
updateMultiButtonText();
    //Event listeners
//Cookie
thatButton.addEventListener("click", function() {
    score = score + (clickValue * multi);
    updateScore();
});
//Multiplicateurs
thatMultiButton.addEventListener("click", function() {
        if (score < multiPrix) {
            window.alert("Il te manque des sous, bonhomme !");
        }else {
            multiPrix = (multiPrix * multiPrixMultiplier);
            console.log(`Multiplicateur activé`);
            //On déduit le coût du multi
            score = (score - multiPrix);
            updateScore();
            //On incrémente le multi et on actualise l'affichage
            multi++;
            updateMultiButtonText();
            window.alert(`Un clic te rapporte désormais ${multi} !`);
    }
}, true);