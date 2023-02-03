//creazione timer decrescente allo scadere con lo 0; 
//aggiunge tempo se tempo < 0 e tasto ripremuto (in base al tempo iniziale)
//sequenza eventi
//tap/click div bianco o nero->
//function call timer inverso su div startTimer(p1) in attesa dello stopTimer toggle
//ri-tocco su div (p1), stop timer, +xSecondi bonus,startTimer(p2)
//
//se hh:xx < 0 -> hh -1 mm + 59
//--------------------------------
//app timer in node.js 
//
let gameTimer 
let sec = 1000,
    min = sec * 60,
    hour = min * 60;
let p1Timer = {
    M : document.getElementById("p1").innerHTML,
    s : 0
}
let p2Timer = {
    M : document.getElementById("p2").innerHTML,
    s : 0
} 

document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener ("click", ev => {
        gameTimer = ev.target.innerHTML
        gameTimer= parseInt(gameTimer);
        p1Timer.M = gameTimer
        p2Timer.M = gameTimer
        p1Timer.s,p2Timer.s = 0
       document.getElementById("p1").innerHTML = p1Timer.M 
       document.getElementById("p2").innerHTML = p2Timer.M
        console.log(p1Timer, p2Timer);
    })
})

// start game cliccando/ tap su DIV
/*document.querySelector("div").forEach((dv) => {
    dv.addEventListener ("click", ev => {

    })
})
*/

function timerPlay() {
setInterval()
}
