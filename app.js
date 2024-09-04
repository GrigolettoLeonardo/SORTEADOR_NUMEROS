//Pegando valores
function pegandoParametros(){
    let idS = ["quantidade","de","ate"];
    let valoresInput=[];
    let coletaInput;
    
    for(i=0;i<idS.length;i++){
        coletaInput = parseInt(document.getElementById(idS[i]).value);
        valoresInput.push(coletaInput);
    }

    return valoresInput;
}

function verificacaoInput(listaEntrada){
    let valoresEntrada = listaEntrada;

    if (valoresEntrada[0]>0){

        if(valoresEntrada[1] > valoresEntrada[2]){
            alert(`O primeiro valor ${valoresEntrada[1]} tem que ser menor que o segundo valor ${valoresEntrada[2]}`);
        } else{
            mostraResultado();
        }

    } else{

        alert("Valor de entrada tem que ser maior que 0!!")
        
    }
}


function gerandoNumeroSecreto(){

    let valores = pegandoParametros();
    let quantidade = valores[0];
    let menorValor = valores[1];
    let maiorValor = valores[2];
    let resultados = [];
    let numeroAleatorio;
    let somador = 0;

    //Loop para não repetir valores
    while(somador<=quantidade){

        numeroAleatorio = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor;

        if(resultados.includes(numeroAleatorio)){
            continue;
        } else{
            resultados.push(numeroAleatorio);            
        }
        somador ++;
    }
    return resultados;
}

function numerosCrescentes(){

    let valoresAleatorios = gerandoNumeroSecreto();
    let valoresCrescente = [];
    let menorValor;
    let indiceMenorValor;

    console.log(valoresAleatorios);

    for(i=valoresAleatorios.length - 1;i>=0;i--){
        menorValor = Math.min(...valoresAleatorios);
        indiceMenorValor = valoresAleatorios.indexOf(menorValor);
        valoresCrescente.push(menorValor);
        valoresAleatorios.splice(indiceMenorValor,1);
    }   
    return valoresCrescente;
}


function mostraResultado(){

    let valoresFinais = numerosCrescentes();
    console.log(valoresFinais);
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${valoresFinais}</label>`;
   

}

function reiniciar(){
    
}



function sortear(){
    let valoresUsuario = pegandoParametros();
    verificacaoInput(valoresUsuario);

}