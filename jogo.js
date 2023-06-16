const nome= prompt("Bem-Vindo(a) ao jogo,qual é o seu nome?");
document.write("", + nome);
localStorage.setItem("nome" , nome);

const NUM_CORACAO = 48;
const TEMPO_INICIAL = 10;
let pontos = 0;
let tempo = 0;
let timer = null;

function iniciaJogo(){
    pontos = 0;
    tempo = TEMPO_INICIAL;
    let tela = document.getElementById("tela");
    tela.innerHTML ="";

    for (let i = 0; i < NUM_CORACAO; ++i) {
        let coracao = document.createElement("img");
        coracao.src = "coracao.png";
        coracao.id = "c" +i;
        coracao.onclick = function(){
        pegaCoracao(this);
        }
        tela.appendChild(coracao);
    }
    timer = setInterval(contaTempo,1000);
}
function pegaCoracao(coracao) {
    coracao
    coracao.src = "coracaomarrom.jpg"
    ++pontos;
      
    let contadorPontos = document.getElementById("pontos");
    contadorPontos.innerText =pontos;
}
function contaTempo (){
  if(tempo > 0){
    --tempo;
  
    let contadorTempo = document.getElementById("tempo");
    contadorTempo.innerText = tempo;
    return contaTempo = null;
  }

    if(tempo <= 0){
        clearInterval(timer);
        alert("Parabéns você fez" + pontos + "pontos!");
        iniciaJogo();
    }
}
