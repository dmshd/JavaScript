document.getElementById("start").addEventListener("click", guessLetter = () => {

            let secretWord = prompt("Entrez un mot à deviner", "Entrez un mot").toLowerCase();

            let answerArray = [];

            //Nombre d'essais autorisés
            let tryLimit = 10;
            let letterCounter = secretWord.length;
            let wrongTryCounter = 0;
            let allAnsweredLetters = [];

            //Boucle pour générer les underscores en fonction de la longueur de mot;
            for (let i = 0; i < secretWord.length; i++) {
                answerArray[i] = "_";
            }

            while (letterCounter > 0 && tryLimit > 0 ) {
                alert(answerArray.join(" ") +  "\n Nombre d'essai restant :" + tryLimit + "\n Lettres entrées : " + allAnsweredLetters.join(" "));
                let answer = prompt("Devine une lettre ou clique sur Annuler pour quitter la partie.");
                if (answer === null) {
                    break;
                } else if (answer.length !== 1) {
                    alert("Tu ne dois saisir qu'une seule lettre.")
                } else {
                    if ( allAnsweredLetters.length > 0 ) {
                        let allAnsweredLettersLength = allAnsweredLetters.length;
                        for (let i = 0; i < allAnsweredLettersLength; i++) {
                            if (answer !== answerArray[i]) {
                                allAnsweredLetters.push(answer);
                                console.log(allAnsweredLetters);
                            }
                        }
                    } else {
                        allAnsweredLetters.push(answer);
                    }
                    tryLimit--;
                    let secretWordLength = secretWord.length;
                    for (let i = 0; i < secretWordLength; i++) {
                        answer = answer.toLowerCase();
                        if (secretWord[i] === answer) {
                            answerArray[i] = answer;
                            letterCounter--;
                        }
                    }
                }
            }
            if (tryLimit > 0) {
                alert(answerArray.join(" "));
                alert("Bien joué. Le mot secret est " + secretWord);
            } else {
                alert("Nombre d'essais épuisé ! Perdu. Réessaie ! :)");
            }
        }, true);