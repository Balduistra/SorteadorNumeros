function sortear (){
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;
    let quantidade = document.getElementById('quantidade').value;
    let listaDeNumerosAle = [];

    
    for (let i = 0 ; i < quantidade ; i++){
        let numero = gerarNumeroAleatorio(de,ate);
        while(listaDeNumerosAle.includes(numero)){
            numero = gerarNumeroAleatorio(de, ate);
        }
        listaDeNumerosAle.push(numero)
        console.log(listaDeNumerosAle)
    }
    mudarStatusDobotao();
    mudarTexto('resultado', 'Os numeros sorteados são ' + listaDeNumerosAle);
}


function gerarNumeroAleatorio (min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function mudarTexto(id, texto){
    let paragrafo = document.getElementById(id);
    paragrafo.innerHTML = texto
}



function limparCampo(){
    de.value = '';
    ate.value = '';
    quantidade.value = '';

}

function mudarStatusDobotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')) {
        //ativa BOTAO
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        //desativa Botao
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

}
function reiniciar() {
   limparCampo();
   mudarStatusDobotao();
}