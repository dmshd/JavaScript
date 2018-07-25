//Ex 1 et 2 en 1

let upDiv = document.getElementById("up");
let downDiv = document.getElementById("down");
let leftDiv = document.getElementById("left");
let rightDiv = document.getElementById("right");

let character = document.getElementById("character");

window.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
        case 49:
            character.style.backgroundColor = "#98166a";
            break;
        case 50: 
            character.style.backgroundColor = "#a67933";
            break;
        case 51: 
            character.style.backgroundColor = "#2d28d2";
            break;
        case 52: 
            character.style.backgroundColor = "#2d28d2";
            break;
        case 53: 
            character.style.backgroundColor = "#681766";
            break;
        case 54: 
            character.style.backgroundColor = "#681766";
            break;
        case 55: 
            character.style.backgroundColor = "#2a31fb";
            break;
        case 56: 
            character.style.backgroundColor = "#5417c3";
            break;
        case 57: 
            character.style.backgroundColor = "#55cecf";
            break;
        // UP KEY
        case 38: 
            upDiv.classList.add("highlight");
        case 40:
            downDiv.classList.add("hightlight");
        case 37:
            leftDiv.classList.add("hightlight");
        case 39:
            rightDiv.classList.add("hightlight");
        default:
        return;
    }
}, true);

window.addEventListener("keyup", (event) => {
    switch (event.keyCode) {
        // UP KEY
        case 38: 
            upDiv.classList.remove("highlight");
        case 40:
            downDiv.classList.remove("hightlight");
        case 37:
            leftDiv.classList.remove("hightlight");
        case 39:
            rightDiv.classList.remove("hightlight");
        default:
        return;
    }
}, true);







