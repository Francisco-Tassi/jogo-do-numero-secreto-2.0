let listaDeNumeros = [];
let tentativas = 1;
let mensagemTentativas;
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroSecreto();

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial(){
    exibirTexto("h1", "Jogo do Número Secreto!");
    exibirTexto("p", "Digite um número entre 1 e 10:");
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    if(chute != numeroSecreto){tentativas++;}
    mensagemTentativas = tentativas == 1? "Você descobriu o número secreto em uma tentativa!" : `Você descobriu o número secreto em ${tentativas} tentativas!`;
    if(chute == numeroSecreto) {
        exibirTexto("h1", "Acertou!");
        exibirTexto("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if(chute > numeroSecreto) {
        limparCampo();
        exibirTexto("p", "O número secreto é menor");
    }
    else {
        limparCampo();
        exibirTexto("p", "O número secreto é maior");
    }
}

function gerarNumeroSecreto() {
    let numeroEscolhido =  parseInt(Math.random()*numeroMaximo + 1);
    if (listaDeNumeros.length == numeroMaximo) {
        listaDeNumeros = [];
    }
    if (listaDeNumeros.includes(numeroEscolhido)) {
        return gerarNumeroSecreto();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

exibirTextoInicial();