// 7-JavaScript 
    //Drill -exercices

    //01 - Les variables
    //Exercice : Diseur de bonne aventure
    let diseurMetier, pays, prenom, nbrEnfant;

    // diseurMetier = prompt("Indiquez le métier que vous souhaiteriez exercer", "Indiquez un métier");
    // diseurPays = prompt("Indiquez le pays dans lequel vous souhaiteriez l'exercer", "Indiquez un pays");
    // diseurErenom = prompt("Indiquez le prénom de votre futur compagne/compagnon", "Indiquez un prénom");
    // diseurNbrEnfant = prompt("Indiquez un nombre d'enfants", "Indiquez un nombre");
    console.log(`Vous serez ${diseurMetier} et habiterez à ${pays} avec ${prenom} et aurez ${nbrEnfant} enfants.`);

    //Exercice : Calculer l'âge
    let calcAnneeNaiss;
    let calcAgeDate = new Date();
    let calcAgeAnnee = calcAgeDate.getFullYear();
    // let calcAnneeNaiss = prompt('Entrez votre année de naissance', "Entrez une année");
    console.log(`Vous avez ${calcAgeAnnee - calcAnneeNaiss} ans`);

    //Exercice Bientôt vieux
    let bientotVieuxAge;
    let consom = "";
    // let bientotVieuxAge = prompt("Entrez votre âge", "Entrez un âge");
    // let consom = prompt("Entrez votre consommation d'eau journalière moyenne estimée en litres", "Entrez une valeur");
    let ageMax = 100;
    let denree = "eau";
    console.log(`D'ici la fin estimée de votre vie, vous aurez bu ${(ageMax - bientotVieuxAge) * (365 * consom)} litres d'eau. Et presque fais pipi autant !`);

    //Exercice : Priorités
    let result = (1 + 2) * 3 + 4 / 2;
    //Dabord entre paranthèse suivi de division / multiplication suivi de addition / soustraction. si plusieurs de même niveau, l'opération s'executera dans le sens de lecture (de gauche à droite)
    console.log(result);

    //Exercice : Langues 
    let langue, msg = "";
    let languePrompt = () =>  langue = prompt("Spécifiez une langue entre fr (français), es (espagnol), en (anglais)");
    // languePrompt();
    if (langue === "") {
       alert('Veuillez spécifier une valeur s.v.p');
    //    languePrompt();
    }else {
        if (langue === "fr") {
            msg = "Bonjour tout le monde";
        }else if (langue === "es") {
            msg = "Hola, mundo !";
        }else if (langue === "en") {
            msg = "Hello World !";
        }
        document.getElementById("langue").innerHTML = msg;
        // console.log(msg);
    } 

    //Exercice : Affichage des scores 
    let score, resultat, rang;

    // score = prompt('Entrez un score', 'Entrez un nombre');

    if (score >= 90) {
        rang = "A";
    } else if (score > 50 ) {
        rang = "B";
    } else if (score <= 50) {
        rang = "C";
    }
    resultat = `Avec le score de ${score}, vous obtenez le rang de ${rang}`;
    document.getElementById("score").innerHTML = resultat;
    console.log(resultat);

    //Exercice : Mettre au pluriel 
    let mot = "pomme";
    let nombre = 2;
    
    if (nombre > 1) {
        console.log(`Je possède ${nombre} ${mot}s`);
    }

    //Exercice : Fonctions
    //Calculs
    let soustr = (x, y) => x - y;
    console.log(soustr(345, 456));
    let divis = (x, y) => x / y;
    console.log(divis(487, 3232));
    let multipl = (x, y) => x * y;
    console.log(multipl(3, 9));
    //(pourcentage, nombre )
    let pourc = (x, y) => (x/100) * y;
    console.log(pourc(70, 99));
    //(distance, heure )
    let vitesseCalc = (x, y) => x / y;
    console.log(`${vitesseCalc(120, 4)}Km/h`);

    //Boucle
    //Exercice : Pair et impair
    //faire le même avec document write
    // for (i = 0; i < 20; i++) {
    //     if (i%2 == 0) {
    //         pairText = `${i} est pair.`;
    //         console.log(pairText);
    //     }else {
    //         impairText = `${i} est impair.`;
    //         console.log(impairText);
    //     }
    // }

    //Exercice : Multiplication Tables
    for (i = 0; i < 10; i++) {
        console.log(`${i} * 9 = ${i*9}`);
    }

    //Exercice : Assigner des grades
    let assignGrades = () => {
        if (i === 1) {
            console.log(`Pour ${i} point vous avez le grade F.`);
        }else if (i > 90) {
            console.log(`Pour ${i} points vous avez le grade A.`);
        }else if (i > 80) {
            console.log(`Pour ${i} points vous avez le grade B.`);
        }else if (i > 70) {
            console.log(`Pour ${i} points vous avez le grade C.`);
        }else if (i > 60) {
            console.log(`Pour ${i} points vous avez le grade C.`);
        }else {
            console.log(`Pour ${i} points vous avez le grade F.`);
        }
    }

    for (i = 0; i < 100; i++) {
        assignGrades();
    }

    //Exercice : Pyramide
    let str = "* "
    let pyramide = () => {
        for (i = 1; i < 6; i++) {
            console.log(str);
            str = str += "* ";
        }
    } 
    pyramide();

    //Tableaux
    //Addition
    let nbr = 0;
    let suite = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    for (x in suite) {
        nbr += suite[x];
    }
    console.log(nbr);

    //Meilleurs choix
    let acteurs = ['Carrey', 'Williams', 'Stalone'];
    
    let consoleLogActeurs = () => {
        for (x in acteurs) {
            if (x == 0) {
                console.log(`Le premier est ${acteurs[x]}`);
            }
            if (x == 1) {
                console.log(`Le deuxième est ${acteurs[x]}`);
            }else if (x == 2) {
                console.log(`Le troisième et dernier est ${acteurs[x]}`);
            }
        }
    }
    consoleLogActeurs();

    //Clone
    let char = ['Mario', 'Luigi', 'Peach'];
    let newChar = char.slice();
    newChar.push('Bowser');
    console.log(newChar);

    
    
    //07-Maths


    // var x = Math.PI;            // Returns PI
    // var y = Math.sqrt(16);      // Returns the square root of 16

    // Math.ceil(x)	//Returns the value of x rounded up to its nearest integer
    // Math.floor(x)	//Returns the value of x rounded down to its nearest integer
    // Math.max(x, y, z, ...)	//Returns the number with the highest value
    // Math.min(x, y, z, ...)	//Returns the number with the lowest value
    // Math.random()	//Returns a random number between 0 and 1
    // Math.round(x)	//Returns the value of x rounded to its nearest integer

    // parseFloat() parseInt()
   

    // La valeur est égal au chiffre le plus petit dans l'enssemble suivant : 7, 5, -12, 6, 32, 18, 14, -2
    let min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
    console.log(min);
    // La valeur est égal au chiffre le plus grand dans l'enssemble suivant : -3, 9, 21, 36, 27, 54, 17, 35
    let max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35)
    console.log(max);
    // La valeur est égal a l'addition des deux précédentes variables
    let minPlusMax = min + max;
    console.log(minPlusMax);

    //Exercice : Aléatoire 1
    // Faire une variable floatBateau dont la valeur est 10.4
    let floatBateau = 10.4;
    // Faire une variable couleBateau dont la valeur est floatBateau arrondie vers le bas
    let couleBateau = Math.floor(floatBateau);
    // Faire une variable voleBateau dont la valeur est floatBateau arrondie vers le haut
    let voleBateau = Math.ceil(floatBateau);

    //Exercice : Aléatoire 2
    // Déclarez les variables suivantes :
    // La valeur aléatoire entre 50 et 100
    let randomBetween = Math.floor(Math.random() * 50) + 50;
    //test
    console.log(Math.floor(Math.random() * 50) + 50);

    // La valeur aléatoire peut être seulement 0 ou 1
    let oneOrZero = Math.round(Math.random());
    //test
    console.log(Math.round(Math.random()));
    // La valeur aléatoire peut aller de 0 à 10 inclu
    let randomZeroToTen = Math.round(Math.random() * 10);
    //test
    console.log(Math.round(Math.random() * 10));

    //Exercice : Aléatoire 3
    // crée un tableau qui contetient les valeurs suivantes : Goro, Johnny Cago, Kano, Liu Kano, Raiden, Reptil, Scorpion, Shang Tsun, Sonya, Sub-Zero
    let characters = ['Goro', 'Johnny Cago', 'Kano', 'Liu Kano', 'Raiden', 'Reptil', 'Scorpion', 'Shang Tsun', 'Sonya', 'Sub-Zero'];
    // choisir un personnage aléatoirement dans le tableau
    let randomArrayValue = (arrayName) => {
        return arrayName[Math.floor(Math.random() * arrayName.length)];
    } 
    let randomChar = randomArrayValue(characters);
    console.log(randomChar);
    //test
    console.log(randomArrayValue(characters));










    //Exerice PNJ
    //Objet
    let Character = {
        name : "Georges",
        age : 54,
        items_to_give : ["Glaive", "Epée", "Bouclier", "Potion de soin", "Potion de mana", "Bottes de cuir", "Plastron de cuir", "Casque de fer"],
        giveItem : function() {
            randomItem = this.items_to_give[Math.floor(Math.random() * this.items_to_give.length)];
            for (x in this.items_to_give) {
                if (this.items_to_give[x] === randomItem) {
                    delete this.items_to_give[x];
                }
            }
            return randomItem;
        }
    }
    
    //Afficher tout sur une ligne dans la console
    charStr = "";
    for (x in Character) {
        charStr += Character[x];
    }
    console.log(charStr);

    //function giveItem
    console.log(Character.giveItem())
    //Check si item supprimé de la liste
    console.log(Character.items_to_give);












    //Exercice SHop
    //Tableau avec objets a vendre
    let shop = [
        epee = {
            title : "Epée ancestrale",
            physic : 45,
            magic : 12,
            minLevel : 8,
            available : true,
            toString : function () {
                return `${this.title} ${this.physic} ${this.minLevel} ${this.available} `;
            }
        },
        hache = {
            title : "Hache d'Orc des marais",
            physic : 89,
            magic : 34,
            minLevel : 10,
            available : true,
            toString : function () {
                return `${this.title} ${this.physic} ${this.minLevel} ${this.available} `;
            }
        },
        sceptre = {
            title : "Sceptre de Merlin",
            physic : 14,
            magic : 289,
            minLevel : 45,
            available : false,
            toString : function () {
                return `${this.title} ${this.physic} ${this.minLevel} ${this.available} `;
            }
        }
    ];

    //Function pour afficher tous les objets
    //dans l'HTML
    document.getElementById("pnj").innerHTML += `<h5>Tous les objets dans le shop</h5>`;
    for (i in shop) {

        document.getElementById("pnj").innerHTML += `<p>${shop[i]}<p>`;
    }
    //dans la console 
    console.log('%c Objets présents dans le shop :', 'background: #222; color: #fff');
    for (i in shop) {
        console.log(shop[i]);
    }
    
    //Afficher les objets disponibles
    //dans l'HTML
    document.getElementById("pnj").innerHTML += `<h5>Tous les objets (uniquement disponibles)</h5>`;
    for (i in shop) {
        if (shop[i].available === true) {
            document.getElementById("pnj").innerHTML += `<p>${shop[i]}<p>`;
        }
    }
    //dans la console 
    console.log('%c Objets uniquements disponibles dans le shop :', 'background: #222; color: #fff');
    for (i in shop) {
        console.log(shop[i]);
    }

    //afficher les objets dont le niveau minimum est de minimum 10
    //dans l'HTML
    document.getElementById("pnj").innerHTML += `<h5>Uniquement les objets dont le niveau minimum requis est de 10</h5>`;
    for (i in shop) {
        if (shop[i].minLevel >= 10) {
            document.getElementById("pnj").innerHTML += `<p>${shop[i]}<p>`;
        }
    }
    //dans la console 
    console.log('%c Uniquement les objets dont le niveau minimum requis est de 10 :', 'background: #222; color: #fff');
    for (i in shop) {
        if (shop[i].minLevel >= 10) {
            console.log(shop[i]);
        }
    }






// Exercice : Personnage
// crée un objet "mainCharacter" qui possède le propriétés suivantes :
// name (string)
// level (int)
// life (int)
// weapon (object)
// attack (function)
// l'objet "weapon" possède les propriétés suivantes :
// name (string)
// damage (int)
let mainCharacter = {
    name : "Morgan",
    level : 80,
    life : 100,
    weapon : {
        name : 'bombe nucléaire',
        damage : 3000
    },
    attack : function() {
        return `${this.name} attaque avec ${this.weapon.name} ! Les dégâts sont de ${this.level * this.weapon.damage} !!! BOOOOOOM.`
    }
};

// Appeler la fonction "attack" du personnage
// la fonction doit retourner : (le nom du personnage) attaque avec l'arme (nom de l'arme) 
// les dégâts sont (niveau du personnage multiplié par le damage de l'arme)

console.log(mainCharacter.attack());

//BONUS////////////////////////////////////////
// Adversaire
// crée un objet "character" qui possèe le propriétés suivantes :
// name (string)
// level (int)
// life (int)
// weapon (object)
// attack (function)
// receiveDamage (function)
// l'objet "weapon" possèe les propriétés suivantes :
// name (string)
// damage (int)


// crée un objet "opponentCharacter" a partir de character



// crée un objet "mainCharacter" a partir de character



// Appeler la fonction "attack" de "mainCharacter" afin qu'il attaque "opponentCharacter"
// la fonction doit afficher dans la console (ligne par lige)
// (le nom du personnage) attaque (nom de l'adversaire)
// avec l'arme (nom de l'arme)
// et lui inflige (niveau du personnage multiplié par le damage de l'arme) de dégats
// (nom de l'adversaire) a maintenant (life de l'adversaire) de vie




///////////////////////////////////////////////





// Exercice Juste prix

// Déclarez les variables suivantes :
// Variable qui sera utilisée pour afficher un message
let messageAAfficher = "message";
// Variable qui va compter le nombre d'essais
let tryCount = 0;
// Variable de la valeur minimum qu'on peut entrer (ici 20)
let minValue = 20;
// Variable de la valeur maximale qu'on peut entrer (ici 80)
let maxValue = 80

// Déclarez les fonctions suivantes :
// crée une fonction qui retourne un numéro aléatoire arrondi entre la variable minimale et la variable maximale
let randomMinMax = (minValue, maxValue) => {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
let nombreADeviner = randomMinMax(1,10);
// crée une fonction
// qui prends un argument pour tester si le numéro qu'on a entré est le bon
// la fonction retourne un de ces 3 messages : C'est plus, C'est moins,C'est juste tu as trouvé en X coups
// Utiliser la console ou les fonctions natives suivantes :

let gagne = false;

let justePrix = () => {
    tryCount = 0;
    while (gagne === false) {
        justePrixNbr = window.prompt('Essayez de deviner un nombre entre 1 et 10');
         if (justePrixNbr === nombreADeviner) {
            if (tryCount === 1) {
                 gagne = true;
                 window.confirm(`Félicitations, ${a} est le juste prix ! Du premier coup !`);
            }else if (tryCount > 1) {
                gagne = true;
                window.confirm(`Félicitations, ${a} est le juste prix ! Nombre d'essais : ${tryCount}`);
            }
         }else if (justePrixNbr > nombreADeviner) {
            window.alert("C'est moins !");
            tryCount++;
         }else if (justePrixNbr < nombreADeviner) {
            window.alert("C'est plus !");
            tryCount++;
         }
    }
}



// window.prompt();
// window.alert();
// window.confirm();