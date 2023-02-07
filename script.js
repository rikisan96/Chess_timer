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

let p1Timer = {
    isPaused : true,
    playing : false,
    M : document.getElementById("p1").innerHTML,
    s : 0 + "0"
}
let p2Timer = {
    isPaused : true,
    playing : false,
    M : document.getElementById("p2").innerHTML,
    s : 0 
} 

function startTimer(timerPlay){
    clearInterval(startTimer)
    setInterval(timerPlay,1000)
}

//setta il gameTime col bottone
document.querySelectorAll("button").forEach(function (btn){
    btn.addEventListener ("click", function(ev) {
        gameTimer = ev.target.innerHTML
        gameTimer= parseInt(gameTimer);
        p1Timer.M = gameTimer
        p2Timer.M = gameTimer
        p1Timer.s,p2Timer.s = 0
        document.getElementById("p1").innerHTML = p1Timer.M + ":" + p1Timer.s 
        document.getElementById("p2").innerHTML = p2Timer.M + ":" + p2Timer.s
    }) 
})


//quando click div_timer:
//1) stop timer esistenti 
//2) avvia timer_player.selezionato che modifica innerHTML ad intervallo
//3) *stile* switch colori css attivo-->spento
document.querySelectorAll(".timer").forEach(function (e){
 e.addEventListener("click", function (ev){
     console.log("p1Timer è: ", p1Timer,"\n", "p2Timer è: ",p2Timer);
     div_selected = ev.target.id
        clearInterval()
     if (div_selected == "p1" && p2Timer.isPaused){
        gameTimer.start = true
        p1Timer.playing = false
        p1Timer.isPaused = true
        p2Timer.playing = true
        p2Timer.isPaused = false
        console.log(p1Timer, p2Timer);
     }
    if (div_selected == "p2" && p1Timer.isPaused) {
        clearInterval(timerPlay)
        clearInterval(timerPlay)
        gameTimer.start = true
        p2Timer.playing = false
        p2Timer.isPaused = true
        p1Timer.playing = true
        p1Timer.isPaused = false
        console.log(p1Timer, p2Timer);
       }
    if (p1Timer.playing || p2Timer.playing){
        setInterval(timerPlay,1000)
    }
 })

})


// ? pxTimer.s 59~0 decrementa sec, else decrementa min 
function timerPlay() {
    if (p1Timer.playing && p2Timer.isPaused == true){
    if(p1Timer.s > 0){
        p1Timer.s--;
        document.getElementById("p1").innerHTML = p1Timer.M + ":" + p1Timer.s 
        } else {
            p1Timer.M --
            p1Timer.s = 59
            document.getElementById("p1").innerHTML = p1Timer.M + ":" + p1Timer.s 
        };
    }else {
    if(p2Timer.s > 0){
        p2Timer.s--;
        document.getElementById("p2").innerHTML = p2Timer.M + ":" + p2Timer.s 
        } else {
            p2Timer.M --
            p2Timer.s = 59
            document.getElementById("p2").innerHTML = p2Timer.M + ":" + p2Timer.s 
        };
    }
}
function timerStop() {
    clearInterval(timerPlay)
}
