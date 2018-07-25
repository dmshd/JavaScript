<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>jsdrill_pendu</title>
    <link rel="stylesheet" type="text/css" href="assets/css/main.css">
</head>
<body>
<main>
    <section>
        <h1>jsdrill_pendu</h1>
        <p>
            <pre>
            # Exercice : jeu du pendu
            ### Astuce
            Utiliser la console **ou** les fonctions natives suivantes :
            - window.prompt();
            - window.alert();
            - window.confirm();
            ### Le jeu !
            Info : le nombre d'essais est illimité
            * Créer un tableau pour contenir les lettres du mot : 'B','O','N','J','O','U','R', 
            * Créer un autre tableau pour mettre les lettres devinées : '_','_','_','_','_','_','_'

            * Écrivez une fonction appelée "guessLetter" cette fonction va :
                - Itérer à travers les lettres
                - Voir si la lettre deviné se trouve dans le mot 
                - Si oui changer le tableau des lettres deviné pour ajouter la nouvelle lettre
                - Afficher dans la console les lettre devinés
                - Le jeu doit savoir quand la partie est finie et féliciter le joueur

            * Bonus : Se rapprocher du vrai pendu :
                - Gardez en mémoire toutes les lettres devinées (bonnes et mauvaises) et seulement laisser l'utilisateur deviner une lettre une fois. 
                - Si une lettre est entrée deux fois, ne rien faire.
                - compter le nombre de tentatives ratées
                <br>
                <button id="start">Démarrer le pendu</button>
            </pre>
        </p>
    </section>
</main>
    <script src="assets/js/mainscript.js"></script>
</body>
</html>