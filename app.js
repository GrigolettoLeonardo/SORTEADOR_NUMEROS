function pegandoValores(){
    let ids = ["quantidade","de","ate"];
    let valor;
    let valores = [];

    for(i=0;i<ids.length;i++){
        valor = parseInt(document.getElementById(ids[i]).value);
        valores.push(valor);
    }
    return valores;
}

function verificacaoUsuario(input){

    let entradas = input;
    let status;
    let valorFimUsua= document.getElementById("resultado");

    if (entradas[1]>entradas[2]){
        status = "erro";
        valorFimUsua.innerHTML = `<label class="texto__paragrafo">Números sorteados: Erro </label>`;
    } else{
        status ="certo";
    }

    return status;
}

function gerandoNumerosAletorios(){

    let valoresRecebidos = pegandoValores();
    let maiorValor = valoresRecebidos[2];
    let menorValor = valoresRecebidos[1];
    let qtd = valoresRecebidos[0];
    let numeroAleatorio;
    let numerosFinais = [];

    //Verificação para não gerar número repetido
    for(i=0;i<qtd;i++){
        numeroAleatorio = Math.floor(Math.random() * (maiorValor-menorValor+1)) + menorValor;

        while(numerosFinais.includes(numeroAleatorio)){
            numeroAleatorio = Math.floor(Math.random() * (maiorValor-menorValor+1)) + menorValor;
        }
        numerosFinais.push(numeroAleatorio);       
    }
    return numerosFinais;
}

function aletaorioCrescente(){

    let valoresFinais = gerandoNumerosAletorios();
    let valoresCrescentes = [];
    let valorMenor;
    let indiceValorMenor;

    console.log(valoresFinais);
    for(i=valoresFinais.length-1;i>=0;i--){
        valorMenor = Math.min(...valoresFinais);
        indiceValorMenor = valoresFinais.indexOf(valorMenor);
        valoresCrescentes.push(valorMenor);
        valoresFinais.splice(indiceValorMenor,1);
    }
    return valoresCrescentes
}

function escreverValores(resultados){
    let valorFimUsua= document.getElementById("resultado");
    valorFimUsua.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${resultados}</label>`;
}

function verificacaoReiniciar(){

    let btReiniciar = document.getElementById("btn-reiniciar");

    if (btReiniciar.classList.contains("container__botao-desabilitado")){

        btReiniciar.classList.remove("container__botao-desabilitado");
        btReiniciar.classList.add("container__botao");

    } else{
        btReiniciar.classList.add("container__botao-desabilitado");
        btReiniciar.classList.remove("container__botao");
    }
}

function sortear(){

    let valoresVerificar = pegandoValores();
    let verificaInput = verificacaoUsuario(valoresVerificar);
    if (verificaInput=="erro"){

        alert("O parâmetro (Do número) tem que ser menor que o (Até o número)");

    } else{
        let numerosFinais = aletaorioCrescente();
        console.log(numerosFinais);
        escreverValores(numerosFinais);
        verificacaoReiniciar();
    }

}

function reiniciar(){

    document.getElementById("quantidade").value = null;
    document.getElementById("de").value = null;
    document.getElementById("ate").value = null;
    verificacaoReiniciar();
}

