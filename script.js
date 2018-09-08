var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

//display initial CSS properties
colorChange()



function randomGradient() {
    console.log("random button");
    var Rcolor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
    var Rcolor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
    // console.log(Rcolor1);
    // console.log(Rcolor2);
    body.style.background = "linear-gradient(to right, " + Rcolor1 + ", " + Rcolor2 + ")";
    css.textContent = body.style.background + ";";

}

function colorChange (){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
    // console.log(color1.value)
    // console.log(color2.value)
}




color1.addEventListener("input", colorChange);

color2.addEventListener("input", colorChange);

random.addEventListener("click", randomGradient);

//todo refactor body.style.background method so it's not repeated performing almost the same function.


