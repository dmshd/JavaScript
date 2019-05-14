
 // Exercice du pendu
    // let toGuess = ['B','O','N','J','O','U','R']; // Mot à deviner
    // let guessed = ['', '', '', '', '', '', '']; // Mot (partiellement) déviné
    
    // let guessLetter = () => {
    //     let letter = prompt("Entrez la lettre");
    //     console.log(letter)
    //     for (let i = 0; i <= toGuess.length ; i++){
    //         letter=letter.toUpperCase();
    //         if(toGuess[i] == letter) {
    //             guessed[i] = letter
    //             console.log("Bravo", guessed)
    //         }
    //     }
        
    //     if(guessed.indexOf('') >= 1) {
    //         guessLetter()
    //     }else {
    //         console.log("Vous avez gagné");
    //     }
        
    // }
    // guessLetter();


 //Le just prix
    // let message = "";
    // let essaiCompteur = 0;
    // let valeurMin = 20;
    // let valeurMax = 80;

    // function prixAleatoire(min, max) {
    //     return Math.floor(Math.random() * (max - min +1)) + min;
    // }
    // function testPrix(bon) {
    //     if (bon == prixAleatoire) {
    //         message = "Tu as trouvé";
    //     }else if (bon > prixAleatoire && ){
    //         message = "C'est"
    //     }
    // }

    // let devinePrix = () => {
    //     let prixAleatoire = prixAleatoire(min, max);
        
    //     let prix = prompt("Entrez un prix entre 20 et 80.");
    //     if (prix )
    // }
        
    // devinePrix();


 //Ex 01 Variables
    let annee = 2018;
    let anneeNaissance = 1989;

    console.log(annee - anneeNaissance);

    let age = 28;
    let ageMaximum = 100;
    let denreeAlimentaire = 'biscuit';
    let consom = 4;

    let esperance = ageMaximum - age;
    const miam = (365 * consom) * esperance;
    console.log(`Il vous reste ${miam} ${denreeAlimentaire} avant d'atteindre l'âge de  ${ageMaximum} ans`);

    var result = (1 + 2) * 3 + 4 / 2;
    console.log(result);

//Langues
    let langue = 'fr'
    let message = '';

    if (langue = 'fr') {
        message = 'Bonjour tout le monde';
        console.log(message);
    }else if (langue = 'es') {
        message = 'Hola, Mundo';
        console.log(message);
    }else if (langue = 'en') {
        message = 'Hello world';
        console.log(message);
    }

//Affichage des scores
    let score = 48;
    let resultat;
    let rang;

    if (score >= 90) {
        rang = 'A';
    }else if (score < 90 && score > 50) {
        rang = 'B';
    }else if (score <= 50) {
        rang = 'C';
    }
    console.log(rang);

//Mettre au pluriel 
    let singulier = "mot";
    let pluriel;
    let nombre = 1000;
    let result2;

    if (!nombre === 1) {
        result2 = `Je possède ${nombre} ${singulier}`;
        console.log(result2);
    }else {
        pluriel = `${singulier}s`;
        result2 = `Je possède ${nombre} ${pluriel}`;
        console.log(result2);
}

// Fonctions

    //Calculs

    const soustr = (a,b) =>  a - b;
    console.log(soustr(56,43));

    const div = (a,b) => a / b;
    console.log(div(120,34));

    const multip = (a,b) => a * b;
    console.log(multip(12,4));

    //Pourcent
    const pourctg = (a,b) => (b / 100) * a;
    console.log(pourctg(70,89.99));

    //Vitesse
    const vitesseCalc = (a,b) => a / b;
    console.log(vitesseCalc(15, 2.30) + 'Km/h.');

// Boucles

    //pair impair

    let pair = [];
    let impair = [];


    for (let i=0; i<=20; i++) {
        if ((i % 2) === 0) {

            console.log(i + 'est pair');
        }else {

            console.log(i + 'est impair');
        }
    }


    //tables

    for (i = 0; i<=10; i++ ) {
        console.log(`${i} * 9 = ${i*9}`);
    }


    //grades

    const score2 = a => {
        if (a > 90) {
            console.log(`Pour ${a} points vous avez le grade A`);
        }else if (a > 80) {
            console.log(`Pour ${a} points vous avez le grade B`);
        }else if (a > 70) {
            console.log(`Pour ${a} points vous avez le grade C`);
        }else if (a > 65) {
            console.log(`Pour ${a} points vous avez le grade D`);
        }else {
            console.log(`Pour ${a} points vous avez le grade F`);
        }
    }
    
    for (i = 0; i<=100; i++) {
        console.log(score2(i))
    }

    //pyramide
    let ligne = '';
    for (i = 1; i <= 5  ; i++) {
        ligne += '* ';
        console.log(ligne);
    }

//Tableaux

    //addition

    // let suite = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // for (i = 0; i <= suite.lenght; i++) {
    //     console.log(suite[i]);
    // }

    let suite = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    add = 0;
    for (var nbr in suite) {
        add = add + suite[nbr];
    }
    console.log(add);
    
    //Meilleurs choix
    let acteurs = ['Stalone', 'Carrey', 'Williams'];  

    for (let i = 0; i <= acteurs.length; i++) {
            if (i == 0) {
                console.log(`Le premier est ${acteurs[0]}.`);
            }else if (i == 1) {
                console.log(`Le deuxiem est ${acteurs[1]}.`);
            }else if (i == 2) {
                console.log(`Le troisieme est ${acteurs[2]}.`);
            }
    }

    //Clone 
    let perso = ['Mario', 'Luigi', 'Peach'];

    let newPerso = perso.slice(); 
    newPerso.push('Bowser');

    console.log(newPerso);
    console.log(perso);

        //ou bien


    let perso2 = ['Mario', 'Luigi', 'Peach'];

    let newPerso2 = [];

    for(var i = 0, len = perso2.length; i < len; ++i) {
        newPerso2[i] = perso2[i];
    }
    newPerso2.push('Bowser');
    console.log(newPerso2);

   