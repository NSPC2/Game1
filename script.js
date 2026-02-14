//scr 
let Ascr = document.getElementById("Ascr");
let Hscr = document.getElementById("Hscr");

//game show
let Hbox = document.getElementById("Hplay");
let Abox = document.getElementById("Aplay");

//controll human
let R = document.getElementById("R");
let P = document.getElementById("P");
let S = document.getElementById("S");




let Human = 0;
let Ai = 0;






R.addEventListener("click", () => {
    let AI = Math.floor(Math.random() * 3 + 1);
    if (AI == 1) {
        Hbox.style.boxShadow = "0px 0px 10px red";
        Abox.style.boxShadow = "0px 0px 10px red";
    } else if (AI == 2) {
        Hbox.style.boxShadow = "0px 0px 10px red";
        Abox.style.boxShadow = "0px 0px 10px green";
        Ai = Ai + 1;
    } else if (AI == 3) {
        Hbox.style.boxShadow = "0px 0px 10px green";
        Abox.style.boxShadow = "0px 0px 10px red";
        Human = Human + 1;
    }
    Ascr.innerText = Ai;
    Hscr.innerText = Human;
})
P.addEventListener("click", () => {
    let AI = Math.floor(Math.random() * 3 + 1);
    if (AI == 1) {
        Hbox.style.boxShadow = "0px 0px 10px green";
        Abox.style.boxShadow = "0px 0px 10px red";
        Human = Human + 1;
    } else if (AI == 2) {
        Hbox.style.boxShadow = "0px 0px 10px red";
        Abox.style.boxShadow = "0px 0px 10px red";
    } else if (AI == 3) {
        Hbox.style.boxShadow = "0px 0px 10px red";
        Abox.style.boxShadow = "0px 0px 10px green";
        Ai = Ai + 1;
    }
    Ascr.innerText = Ai;
    Hscr.innerText = Human;
})
S.addEventListener("click", () => {
    let AI = Math.floor(Math.random() * 3 + 1);
    if (AI == 1) {
        Hbox.style.boxShadow = "0px 0px 10px red";
        Abox.style.boxShadow = "0px 0px 10px green";
        Ai = Ai + 1;
    } else if (AI == 2) {
        Hbox.style.boxShadow = "0px 0px 10px green";
        Abox.style.boxShadow = "0px 0px 10px red";
        Human = Human + 1;
    } else if (AI == 3) {
        Hbox.style.boxShadow = "0px 0px 10px red";
        Abox.style.boxShadow = "0px 0px 10px red";
    }
    Ascr.innerText = Ai;
    Hscr.innerText = Human;
})







//Restart button
document.getElementById("restart").addEventListener("click", () => {
    Hbox.style.boxShadow = "0px 0px 6px rgb(37, 37, 37)";
    Abox.style.boxShadow = "0px 0px 6px rgb(37, 37, 37)";
    Human = 0;
    Ai = 0;
    Ascr.innerText = 0;
    Hscr.innerText = 0;

})
