let button1 = document.querySelector("#bt1");
let button2 = document.querySelector("#bt2");
let button3 = document.querySelector("#bt3");
let button4 = document.querySelector("#bt4");

let buttonStart = document.querySelector("#btStart");
// let buttonRepeat = document.

let box1 = document.querySelector("#boxOne");
let box2 = document.querySelector("#boxTwo");
let box3 = document.querySelector("#boxThree");
let box4 = document.querySelector("#boxFour");

// button1.addEventListener("click", () => {box1.style.color = "yellow"});
// button2.addEventListener("click", () => {box2.style.color = "red";});
// button3.addEventListener("click", () => {box3.style.color = "coral";});
// button4.addEventListener("click", () => {box4.style.color = "orange";});

let random = 0;

function start(){
    random = Math.floor(Math.random()*(4 - 1 + 1)) + 1;
    console.log(random);
    return random;
}



function repeat(){
    random = 0;
    document.getElementById("boxOne").style.backgroundColor = "rgb(124, 52, 52)";
    document.getElementById("boxTwo").style.backgroundColor = "rgb(124, 52, 52)";
    document.getElementById("boxThree").style.backgroundColor = "rgb(124, 52, 52)";
    document.getElementById("boxFour").style.backgroundColor = "rgb(124, 52, 52)";
    return start();
}

function buttonClick(buttonId){
    switch(buttonId){
        case "bt1":
            if (random == 1) {
                document.getElementById("boxOne").style.backgroundColor = "white";
            }else{
                alert("LOL");
            }
            repeat();
            break;
        case "bt2":
            if (random == 2) {
                document.getElementById("boxTwo").style.backgroundColor = "white";                
            }else{
                alert("LOL");
            }
            repeat();
            break;
        case "bt3":
            if (random == 3) {
                document.getElementById("boxThree").style.backgroundColor = "white";                
            }else{
                alert("LOL");
            }
            repeat();
            break;
        case "bt4":
            if (random == 4) {
                document.getElementById("boxFour").style.backgroundColor = "white";                
            }else{
                alert("LOL");
            }
            repeat();
            break;
    }

}

console.log("Всем любви❤");