<?php 
// MasterMind
// Objectif

//     développer un mastermind en HTML - CSS - JS

// Créer un MasterMind

// Règles du jeux ici Précision : pour le mode normal, la solution = 4 couleurs différentes
// Le jeu

//     Créer en HTML 3 div (minimum - vous pouvez faire comme vous voulez)
//         une pour l'historique des réponses
//         une pour les réponses actuelles
//         une pour le choix des couleurs (placer 6 ronds de couleurs différentes)

//     En JS : faire en sorte que quand on clique sur une couleur, elle se place dans la div des réponses.

//     Faire en sorte que quand les 4 couleurs sont placées dans la div réponse, elles se déplacent dans la div historique.

//     Il faut que quand les couleurs arrivent dans l'historique, sur la droite, s'affiche des boules noires ou blanches qui indiquent si :
//         elles sont bien placées
//         elles sont juste mais pas au bon endroit

// PS : il ne faut pas que les boules noires et blanches soient dans le mème ordre que les boules de couleur (sinon c'est trop facile)

// Astuce : faire apparaître d'abord les boules noires puis les boules blanches.

//     Faire une fonction qui créer une solution automatique à chaque début de partie. (utiliser le random)

// Astuce

//     Utiliser le innerHTML et autres
//     Utiliser une class "rond" et juste modifier le background-color (pour les déplacements dans les différentes div)

// Bonus

//     Faire en sorte que quand on se trompe on puisse retirer les couleurs des réponses actuelles.
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>jsdrill_mastermind</title>
    <link rel="stylesheet" type="text/css" href="assets/css/main.css">
</head>

<body>
    
    <section id="mainsection">
    <h1>jsdrill_mastermind</h1>
        <div class="container">
            <pre>
Créer en HTML 3 div (minimum - vous pouvez faire comme vous voulez)
une pour l'historique des réponses
une pour les réponses actuelles
une pour le choix des couleurs (placer 6 ronds de couleurs différentes)

En JS : faire en sorte que quand on clique sur une couleur, elle se place dans la div des réponses.

Faire en sorte que quand les 4 couleurs sont placées dans la div réponse, elles se déplacent dans la div historique.

Il faut que quand les couleurs arrivent dans l'historique, sur la droite, s'affiche des boules noires ou blanches qui indiquent si :
elles sont bien placées
elles sont juste mais pas au bon endroit

PS : il ne faut pas que les boules noires et blanches soient dans le mème ordre que les boules de couleur (sinon c'est trop facile)

Astuce : faire apparaître d'abord les boules noires puis les boules blanches.

Faire une fonction qui créer une solution automatique à chaque début de partie. (utiliser le random)

Astuce

Utiliser le innerHTML et autres
Utiliser une class "rond" et juste modifier le background-color (pour les déplacements dans les différentes div)

Bonus

Faire en sorte que quand on se trompe on puisse retirer les couleurs des réponses actuelles.

                <br>
                <button id="start">Démarrer le jeu du Mastermind</button>
            </pre>
        </div>
    </section>
    <script src="assets/js/mainscript.js"></script>
</body>

</html>