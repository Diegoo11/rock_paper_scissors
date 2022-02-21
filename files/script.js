let valor_tu

let valor_pc = ['pi', 'pa', 'ti']


let result 

let jugadas = 0

let puntos_tu = 0

let puntos_pc = 0

let score_tu = document.getElementById("score_1")

let score_pc = document.getElementById("score_2")

let edit_1 = document.getElementById("edit_1")

let edit_2 = document.getElementById("edit_2")

document.getElementById("piedra").onclick = function(){
    if(jugadas===5){
        document.getElementById("edit_1").innerHTML = "Gracias por jugar xd"
        if(puntos_pc>puntos_tu){
            document.getElementById("edit_2").innerHTML = "Perdiste :c"
        }
        else{document.getElementById("edit_2").innerHTML = "Ganaste :)"}
    }
    valor_tu = 'piedra';
    
    let uwu = valor_pc[Math.floor(Math.random()*3)]
    jugadas++
    if(uwu==='pa'){
        result = 'punto_contra'
        ++puntos_pc
    }
    else if(uwu==='pi'){
        result = 'punto_empate'
    }
    else if(uwu==='ti'){
        result = 'punto_favor'
        ++puntos_tu
    }
    
    if(result==='punto_favor'){
        document.getElementById("score_1").innerHTML = "Score : " + puntos_tu
    }
    else if(result==='punto_contra'){
        document.getElementById("score_2").innerHTML = "Score : " + puntos_pc
    }

    console.log(uwu)
}

document.getElementById("papel").onclick = function(){
    if(jugadas===5){
        document.getElementById("edit_1").innerHTML = "Gracias por jugar xd"
        if(puntos_pc>puntos_tu){
            document.getElementById("edit_2").innerHTML = "Perdiste :c"
        }
        else{document.getElementById("edit_2").innerHTML = "Ganaste :)"}
    }
    valor_tu = 'papel'
    let uwu = valor_pc[Math.floor(Math.random()*3)]
    jugadas++
    if(uwu==='pa'){
        result = 'punto_contra'
        ++puntos_pc
    }
    else if(uwu==='pi'){
        result = 'punto_empate'
    }
    else if(uwu==='ti'){
        result = 'punto_favor'
        ++puntos_tu
    }
    
    if(result==='punto_favor'){
        document.getElementById("score_1").innerHTML = "Score : " + puntos_tu
    }
    else if(result==='punto_contra'){
        document.getElementById("score_2").innerHTML = "Score : " + puntos_pc
    }
}

document.getElementById("tijera").onclick = function(){
    if(jugadas===5){
        document.getElementById("edit_1").innerHTML = "Gracias por jugar xd"
        if(puntos_pc>puntos_tu){
            document.getElementById("edit_2").innerHTML = "Perdiste :c"
        }
        else{document.getElementById("edit_2").innerHTML = "Ganaste :)"}
    }
    valor_tu = 'tijera'
    let uwu = valor_pc[Math.floor(Math.random()*3)]
    jugadas++
    if(uwu==='pa'){
        result = 'punto_contra'
        ++puntos_pc
    }
    else if(uwu==='pi'){
        result = 'punto_empate'
    }
    else if(uwu==='ti'){
        result = 'punto_favor'
        ++puntos_tu
    }
    
    if(result==='punto_favor'){
        document.getElementById("score_1").innerHTML = "Score : " + puntos_tu
    }
    else if(result==='punto_contra'){
        document.getElementById("score_2").innerHTML = "Score : " + puntos_pc
    }
}
