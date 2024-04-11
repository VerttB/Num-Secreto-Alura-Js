let numSecreto = randomNum();
let tentativas = 1;
let listaNumeros = [];
let numeroLimite = 10;
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

function exibirMsgInicial(){
    exibirTexto('h1', "Jogo do número secreto");
    exibirTexto('p', "Chute um número entre 1 e 10")
}
exibirMsgInicial();

function verificarChute(){
    let numChutado = document.querySelector("input").value;

    if ( numChutado == numSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas": "tentativa";
        let mensagemTentativas = `Você Acertou!! ${tentativas} ${palavraTentativa} ao todo`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        tentativas++;
        limparInput()
        if(numChutado > numSecreto){
            exibirTexto('p', "O número secreto é menor que o numero chutado");

        }
        else{
            exibirTexto('p', "O nuúmero secreto é maior que o número chutado");
        }
    }
}

function randomNum(){
   let numeroRandom = parseInt(Math.random() * numeroLimite + 1);
   let tamLista = 0;
   if(tam == listaNumeros.length){
    listaNumeros = [];
   }
   if(listaNumeros.includes(numeroRandom)){
    return randomNum();
   }
   else{
    tamLista++;
    listaNumeros.push(numeroRandom);
    return numeroRandom;
   }
}

function limparInput(){
    numChutado = document.querySelector('input');
    numChutado.value = '';
}

function reiniciarJogo(){
    numSecreto = randomNum();
    limparInput();
    tentativas = 1;
    exibirMsgInicial()
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

