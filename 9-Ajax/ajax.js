// AJAX

const loader = new XMLHttpRequest();
let bahrainCounter = 0;
let lePlusHautScore, lePlusPetitScore;
let lePlusBasScore;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }




// charger le fichier "data.json" tip : xmlHttpRequest
loader.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            // console.log("Réponse reçue: %s", this.responseText);
            console.log("Content-Type: %s", this.getResponseHeader("Content-Type"));
            let data = this.responseText;
            
            // console.log(data);
            parsedData = JSON.parse(data);
            // console.log(parsedData);
            
           
            // classer l'odre du tableau selon les scores tip : arr.sort()

            
            for (let x in parsedData) {
                // ajouter un score aléatoire (0 -> 1000) à toutes ces personnes tip: arr.map()
                let randomScore = getRandomInt(1000);

                Object.defineProperty(parsedData[x], 'score',  {
                    value: randomScore,
                    writable: true
                });
                
                //On va tout mettre dans un tableau HTMl, c'est quand même fait pour ça à la base ! finalement je regarderai à ça plus tard
                let tableheaders = "<tr><th>Name</th><th>Birthday</th><th>Country</th><th>Score</th></tr>";

                // mettre personnes dans 3 categories (a > 750, b > 500, c < 500 ) tip : forEach() les catgories sont des tableaux
                if (randomScore >= 750) {
                    Object.defineProperty(parsedData[x], 'category',  {
                        value: 'A',
                        writable: true
                    });
                }else if (randomScore >= 500) {
                    Object.defineProperty(parsedData[x], 'category',  {
                        value: 'B',
                        writable: true
                    });
                }else if (randomScore < 500) {
                    Object.defineProperty(parsedData[x], 'category',  {
                        value: 'C',
                        writable: true
                    });
                }

                if (parsedData[x].country === "Bahrain") {
                    bahrainCounter++;
                }

                }
                
            }
            console.log(parsedData);
            console.log(bahrainCounter + " personnes viennent du Bahrain");
            console.log(lePlusHautScore + " est le plus haut score");
            console.log(lePlusBasScore + " est le plus bas score");
            
        } else {
            console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
        }
    }



loader.open('GET', 'data.json', true); 
loader.send(null);


