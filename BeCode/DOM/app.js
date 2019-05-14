//DOM

// // EXERCICE 1 : Manipulation de classes
// // sélectionner le body
let body = document.querySelector(".bg-aqua");
console.log(body.classList);
// // lui retirer la classe "bg-aqua"
body.classList.remove("bg-aqua");
console.log(body.classList);
// // lui ajouter la classe "bg-olive"
body.classList.add("bg-olive");
// // sélectioner first-paragraph
let firstP = document.querySelector("p:first-of-type");
// // lui retirer les classes "bg-lime" et "gray"
firstP.classList.remove("bg-lime", "gray");
// // lui ajouter la class "aqua"
firstP.classList.add("aqua");
// // sélectionner tous les éléments qui ont la classe 'bg-silver'
let test = document.querySelectorAll(".bg-silver");

// // modifier tout ces éléments en leurs ajoutant la classe "bg-teal"
for (let i = 0; i < test.length; i++) {
    test[i].classList.add("bg-teal");
    test[i].classList.remove("bg-silver")
}
console.log(test);

// sélectionne tous les éléments de type 'blockquote'
let blocks = document.getElementsByTagName("blockquote");


// modifier tout ces éléments en leurs ajoutant la classe "bg-white"
for (let i = 0; i < blocks.length; i++) {
    blocks[i].classList.add("bg-white");
}
console.log(blocks);




// EXERCICE 2 : Selecteurs CSS
// avec querySelector sélectioner l'élément 'my-table'
let myTable = document.querySelector("#my-table");
// lui ajouter la classe "bg-purple"
myTable.setAttribute("class", "bg-purple");
console.log(myTable);
// avec querySelectorAll sélectioner tous les paragraphes dans 'container'
let allPInsideContainer = document.querySelectorAll(".container > p");
// modifier tout ces éléments en leurs ajoutant la classe 'shadow'
for (let i = 0; i < allPInsideContainer.length; i++) {
    allPInsideContainer[i].classList.add("shadow");
}



// EXERCICE 3
// sélectionne tous les éléments de type 'pre'
let pre = document.getElementsByTagName("pre");
console.log(pre);
// avec la propriété style change la couleur de texte
pre[0].style.color = "red";
// avec la propriété style change la couleur de fond grâce à backgroundColor
// pre[0].style.backgroundColor = "red";
// console.log(pre);
// avec la propriété style ajouter un border-top de 3px solid red (n'oublie pas que tu peux acceder au propriété d'un objet grâce comme ceci : ["prop-name"] )
pre[0].style.borderTop = "3px solid red";
console.log(pre);
// avec la propriété style ajouter un border-bottom de 3px solid red
pre[0].style.borderBottom = "3px solid red";
// sélectionne le premier élément de type 'h3'
let firstH3 = document.querySelector("h3:first-of-type").innerHTML = "<em>Italic title ! yeah !</em>";
// remplacer son contenu HTML en <em>Italic title ! yeah !</em>
console.log(firstH3);

// sélectionne le premier élément de type 'h2'
let firstH2 = document.querySelector("h2:first-of-type");
// remplacer son contenu texte par en <strong>HTML doens't work !</strong>
firstH2.innerHTML = "<strong>HTML doens't work !</strong>";




// EXERCICE 4 : Création d'éléments
// sélectioner le premier 'ul'
let premierUl = document.querySelector("ul:first-of-type");
// crée un élément de type 'li'
let domLi = document.createElement("li");
console.log(domLi);
// ajouter ce texte Mon meilleur ami est <a href='http://www.google.com'>Google</a> dans le 'li'
domLi.innerHTML = "<a href='http://www.google.com'>Google</a>";
// ajouter ce 'li' l'élément dans le ul

premierUl.appendChild(domLi);

console.log(premierUl);
// sélectionner le premier lien dans le 'li' précedement crée
let leADansLeLi = domLi.querySelector("a");
console.log(leADansLeLi);
// avec la propriété style change la couleur de texte de ce lien
leADansLeLi.style.color = "#fff";


// EXERCICE 4 : Création et suppression de plusieurs éléments
// sélectionner le premier élément 'ol'
let premierOl = document.querySelector("ol:first-of-type");
// faire une boucle sur tous les enfants de ce dernier grâce à sa propriété children

console.log(premierOl);

// supprimer chaque enfant de 'ol' grâce à removeChild()


// déclare dans un tableau les valuers suivantes : ["Silent Teacher","Code Monkey", "CodeCombat"]

// faire une boucle sur tous les enfants du tableau précédement crée

// pour chaque valeur du tableau crée un élément 'li' crâce à document.createElement()

// ajouter à chaque 'li' la valeur courrante tableau

// ensuite ajouter chaque 'li' à l'élément 'ol' précédement sélectionné
