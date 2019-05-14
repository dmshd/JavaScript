//Jeux Pendu

    // window.prompt();
    // window.alert();
    // window.confirm();  

    let stopMsgs = [
        'Ok !',
        'C\'est pas grave',
        'J\'espère que t\'as une bonne excuse',
        'Je ne t\'en veux pas.',
        'T\'auras essayé au moins.',
        'Ok, pas des soucis',
        'Si tes parents savaient ça...',
        'lol.',
        'Allez, viens. On est Bien bien bien bien bien !',
        'Reviens, gamin !',
        'T\'abuses quoi.',
        'C\'est tout. Pour le moment...',
        'D\'accord.',
        'Entendu',
        'Non mais oh, ça va pas la tête ?',
        'Quand il y en a un ça va. C\'est quand il y en a beaucoup que ça pose problème...',
        'I\'ll be back.',
        'Pas trop déçu?', 
        'hehehe'
    ];
    //Functions
    let randomArrayValue = (arrayName) => {
        return arrayName[Math.floor(Math.random() * arrayName.length)];
    } 

 // Info : le nombre d'essais est illimité

    // Créer un tableau pour contenir les lettres du mot : 'B','O','N','J','O','U','R',
    let penduMot = ['B','O','N','J','O','U','R'];
    // Créer un autre tableau pour mettre les lettres devinées : '','','','','','','_'
    let penduDevine = ['_ ','_ ','_ ','_ ','_ ','_ ','_ '];

    // Écrivez une fonction appelée "guessLetter" cette fonction va 
    // Itérer à travers les lettres
    // Voir si la lettre deviné se trouve dans le mot
    // Si oui changer le tableau des lettres deviné pour ajouter la nouvelle lettre
    // Afficher dans la console les lettre devinés
    // Le jeu doit savoir quand la partie est finie et féliciter le joueur
    let jeuPendu = (input) => {
        if (input == 'STOP') {
            window.alert(randomArrayValue(stopMsgs));
            throw new Error("Stopped.");
        }
        for (x in mot) {
            if (input == penduMot[x]) {
                penduDevine[x] = mot[x];
                window.confirm(`Bien joué ! Vous avez trouvé la lettre "${penduMot[x]}". \n Le mot : ${penduDevine} `);
                // window.confirm(`Bien joué ! Vous avez trouvé la lettre "${penduMot[x]}". \n Le mot : ${penduDevine} `);
            }else {
                console.log(`Il n'y a pas de ${input} dans le mot !`);
                // window.alert(`Il n'y a pas de ${input} dans le mot !`)
            }
        }
    }
    while ( penduMot != penduDevine ) {
    jeuPendu(prompt('Veuillez entrez une lettre \n "STOP" pour arrêter.', 'Entrez une lettre'));
    }

    // Bonus: Se rapprocher du vrais pendu :

    // Gardez en mémoire toutes les lettres devinées (bonnes et mauvaises) et seulement laisser l'utilisateur deviner une lettre une fois.
    // Si une lettre est entrée deux fois, ne rien faire.
    // compter le nombre de tentatives ratés