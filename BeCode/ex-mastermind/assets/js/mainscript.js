console.log("MASTERMIND.js by Muyshond Daniel");

let jeuFini = false;
let colors = ['brown', 'yellow', 'green', 'red', 'purple', 'blue', 'white'];
let divNames = ["histCont", "answCont", "choiceCont"];
//Sélecteurs
let startButton = document.getElementById("start");
let section = document.getElementById("mainsection");
var solution = [];
//Functions
let newSolution = () => {
    while (solution.length < 4) {
        let random = Math.floor(Math.random() * colors.length);
        solution.push(colors[random]);
    }
    console.log(solution);
}
newSolution();
let creerBoule = (elem) => {
    boule = document.createElement("div");
    boule.className = "boule " + elem;
    return boule;
}

let ajoutLigne = () => {
    ligne = document.createElement("div");
    ligne.className = "ligne";
    document.getElementById("histcont").prepend(ligne);
}

//On génère les DOM Elements du jeu
divNames.forEach(function (elem) {
    div = document.createElement("div");
    div.id = elem.toLowerCase();
    div.className = "box";
    section.appendChild(div);
});
colors.forEach(function (elem) {
    boule = creerBoule(elem);
    document.getElementById("choicecont").appendChild(boule);
});

//Sélecteurs
var choiceCont = document.getElementById("choicecont");
var histCont = document.getElementById("histcont");
var answCont = document.getElementById("answcont");

startButton.addEventListener("click", mastermind = () => {
    newSolution();
});

[...document.querySelectorAll(".boule")].map(element => {
    element.addEventListener("mouseenter", function (event) {
        element.style.opacity = 0.4;
    });
    element.addEventListener("mouseout", function (event) {
        element.style.opacity = 1;
    });
    element.addEventListener("click", function (event) {

        if (jeuFini !== true) {

            switch (event.target.parentElement.id) {
                case 'choicecont':
                    if (answCont.children.length < 4) {
                        couleur = event.srcElement.classList[1];
                        newBoule = creerBoule(couleur);
                        answCont.appendChild(newBoule);
                        if (answCont.children.length === 4) {
                            ajoutLigne();
                            let proposition = [];
                            for (let i = 0; i < 4; i++) {
                                histCont.firstChild.append(answCont.firstChild);
                            }
                            let histContFirstChildChildrens = histCont.firstChild.children;
                            for (element of histContFirstChildChildrens) {
                                proposition.push(element.classList.item(1));
                            }
                            proposition.forEach(function (element) {
                                console.log(element);
                                // for (x of solution) {
                                //     if (elem === solution[x]) {
                                //         console.log(elem, index);
                                //     }
                                // }

                            });

                        }
                    }
                    break;
                case 'answcont':
                    console.log(event.srcElement.parentElement.id);
                    break;
            }
        } else {
            alert("Le jeu est terminé !");
        }
    });
});