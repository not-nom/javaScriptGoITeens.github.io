let texti = document.querySelectorAll(".changer");
let colors = ["firebrick", "darkhaki"];
let number = Math.floor((Math.random()) * colors.length);
newFunction(colors[number]);
function newFunction(colour) {
    texti.style.color = colour;
}
