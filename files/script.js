let valor_tu
let valor_pc
let valor_pc_1
let variable_pc = ['pi', 'pa', 'ti']
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let sisors = document.querySelector(".sisors")
let result 
let jugadas = 0
let puntos_tu = 0
let puntos_pc = 0
let score_tu = document.getElementById("score_1")
let score_pc = document.getElementById("score_2")
let edit_1 = document.getElementById("edit_1")
let edit_2 = document.getElementById("edit_2")

let boton_piedra = document.getElementById("piedra")
let boton_papel = document.getElementById("papel")
let boton_tijera = document.getElementById("tijera")

boton_piedra.onclick = function(){
    valor_pc_1 = ramdom_pc()
    valor_tu = "piedra"
    check_respuesta_pc(valor_pc_1)
    switch(valor_pc_1){
        case "pi" :
            console.log("empate")
            empate()
            break;
        case "ti" :
            console.log("ganate")
            punto_favor()
            break;
        case "pa" :
            console.log("perdiste")
            punto_contra()
            break;
    }
    check_ganador ()
}

boton_papel.onclick = function(){
    valor_pc_1 = ramdom_pc()
    valor_tu = "papel"
    check_respuesta_pc(valor_pc_1)
    switch(valor_pc_1){
        case "pi" :
            console.log("ganaste")
            punto_favor()
            break;
        case "ti" :
            console.log("perdiste")
            punto_contra()
            break;
        case "pa" :
            console.log("empate")
            empate()
            break;
    }
    check_ganador()
}

boton_tijera.onclick = function(){
    valor_pc_1 = ramdom_pc()
    valor_tu = "tijera"
    check_respuesta_pc(valor_pc_1)
    switch(valor_pc_1){
        case "pi" :
            console.log("perdiste")
            punto_contra()
            break;
        case "ti" :
            console.log("empate")
            empate()
            break;
        case "pa" :
            console.log("ganaste")
            punto_favor()
            break;
    }
    check_ganador ()
}

function check_ganador (){
    if(puntos_pc===5||puntos_tu===5){
        document.getElementById("edit_1").innerHTML = "Gracias por jugar xd"
        if(puntos_pc>puntos_tu){
            setInterval(() => {
                document.getElementById("edit_2").innerHTML = "Perdiste :c"
            }, 100);

        }
        else{
            setInterval(() => {
                document.getElementById("edit_2").innerHTML = "Ganaste :)"
            }, 100);
        }
    }
}

function check_respuesta_pc (uwu){
    if(uwu==="pi"){
        rock.classList.add("variable")
        setTimeout(()=>{rock.classList.remove("variable")},400)
    }
    else if(uwu==="pa"){
        paper.classList.add("variable")
        setTimeout(()=>{paper.classList.remove("variable")},400)
    }
    else if(uwu==="ti"){
        sisors.classList.add("variable")
        setTimeout(() => {sisors.classList.remove("variable")},400);
    }
}

function ramdom_pc (){
    valor_pc = variable_pc[Math.floor(Math.random()*3)]
    return valor_pc
}

function punto_favor(){
    puntos_tu++
    document.getElementById("score_1").innerHTML = "Score : " + puntos_tu
    document.getElementById("score_2").innerHTML = "Score : " + puntos_pc
    document.getElementById("edit_3").innerHTML = ">"
    setInterval(() => {
        document.getElementById("edit_3").innerHTML = ""
    }, 800);
}

function punto_contra(){
    puntos_pc++
    document.getElementById("score_1").innerHTML = "Score : " + puntos_tu
    document.getElementById("score_2").innerHTML = "Score : " + puntos_pc
    document.getElementById("edit_3").innerHTML = "<"
    setInterval(() => {
        document.getElementById("edit_3").innerHTML = ""
    }, 800);
}

function empate(){
    document.getElementById("edit_3").innerHTML = "="
    setInterval(() => {
        document.getElementById("edit_3").innerHTML = ""
    }, 800);
}