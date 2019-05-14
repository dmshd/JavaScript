
//ex 1
let troisDiv = document.querySelectorAll(".hoverMe");

console.log(troisDiv);

function hide(e) {
    e.target.style.visibility = 'hidden';
}

function show() {
    for (let i = 0; i < troisDiv.length; i++) {
        troisDiv[i].style.visibility = 'visible';
    }
}

    for (let i = 0; i < troisDiv.length; i++) {
        troisDiv[i].addEventListener('mouseover', hide);
    }

//2
let resetDiv = document.getElementById("reset");
resetDiv.addEventListener('click', show);

//3
let displayCoord = (e) => {
    let xcoord = e.clientX;
    let ycoord = e.clientY;
    document.getElementById("x-text").innerHTML = xcoord;
    document.getElementById("y-text").innerHTML = ycoord;
}
document.body.onmousemove = displayCoord;


