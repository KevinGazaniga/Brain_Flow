let turno = "X"

let rodada = 0;

function identificarTurno(rodada){
    return true ? rodada % 2 == 0 : false
}

function identificarJogador(){
    if (identificarTurno(rodada)){
            return("X")
        }
        else{
            return("O")
        }
}


function verificadorJogada(id) {
    if(!verificarGanhador()){
        if(document.getElementById(id).value == "  "){
            if (identificarTurno(rodada)){
                document.getElementById(id).value = "X" 
            }else{
                document.getElementById(id).value = "O"
            }
            
            if(verificarGanhador()){''
                if (identificarJogador() == "X") {
                    alert("Parabéns, " + document.getElementById(10).value + " ganhou!")
                    limparTela()
                    return
                } else {
                    alert("Parabéns, " + document.getElementById(11).value + " ganhou!")
                    limparTela()
                    return
                }
            }
            rodada++
            if(empate()){
                alert("Vixii, deu velha")
                limparTela()
            }
        }
    }else{
        if(rodada >= 9 && verificarGanhador() == false){
            empate()
        }else{                                         
            alert("O jogo já acabou, clique em OK para reiniciar")
            limparTela()
        }
    }
}
function empate() {
    if (rodada >= 9 && verificarGanhador() == false) {
        alert("Vixii, deu velha")
        limparTela()
    }
}

function limparTela() {
    document.getElementById("casa0").value = "  "
    document.getElementById("casa1").value = "  "
    document.getElementById("casa2").value = "  "
    document.getElementById("casa3").value = "  "
    document.getElementById("casa4").value = "  "
    document.getElementById("casa5").value = "  "
    document.getElementById("casa6").value = "  "
    document.getElementById("casa7").value = "  "
    document.getElementById("casa8").value = "  "
    rodada = 0
}
function verificarGanhador() {
    var jog1 = document.getElementById(10).value
    var jog2 = document.getElementById(11).value
    var btn0 = document.getElementById("casa0").value
    var btn1 = document.getElementById("casa1").value
    var btn2 = document.getElementById("casa2").value
    var btn3 = document.getElementById("casa3").value
    var btn4 = document.getElementById("casa4").value
    var btn5 = document.getElementById("casa5").value
    var btn6 = document.getElementById("casa6").value
    var btn7 = document.getElementById("casa7").value
    var btn8 = document.getElementById("casa8").value

    if (btn0 == btn1 && btn0 == btn2 && btn0 != "  ") return true
    if (btn0 == btn3 && btn0 == btn6 && btn0 != "  ") return true
    if (btn3 == btn4 && btn3 == btn5 && btn3 != "  ") return true
    if (btn6 == btn7 && btn6 == btn8 && btn6 != "  ") return true
    if (btn1 == btn4 && btn1 == btn7 && btn1 != "  ") return true
    if (btn2 == btn5 && btn2 == btn8 && btn2 != "  ") return true
    if (btn0 == btn4 && btn0 == btn8 && btn0 != "  ") return true
    if (btn2 == btn4 && btn2 == btn6 && btn2 != "  ") return true
    return false
}
function com() {
    var j1 = document.getElementById(10).value
    var j2 = document.getElementById(11).value
    alert(j1 + " possui o X, " + j2 + " possui o O.")
}






