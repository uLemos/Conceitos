// let temperatura = parseFloat(prompt('Coloque uma temperatura para ser convertida para Fahrenheit:'));

// console.log(((temperatura * 9/5) + 32).toFixed(2));

// function conversao(){
//     let conversao = (temperatura * 9/5) + 32;
//     return conversao;
// }

// console.log(conversao);


function soma(){

    let valor1 = document.querySelector('#valor1').value;
    let valor2 = document.querySelector('#valor2').value;

    console.log(valor1 + valor2)
    return document.getElementById('resultado').innerHTML = valor1 + valor2;
}


function subtracao(){
    let valor1 = document.querySelector('#valor1').value;
    let valor2 = document.querySelector('#valor2').value;

    return parseFloat(document.getElementById('resultado').innerHTML = valor1 - valor2) ;
}


function multiplicacao(){
    let valor1 = document.querySelector('#valor1').value;
    let valor2 = document.querySelector('#valor2').value;

    return document.getElementById('resultado').innerHTML = valor1 * valor2;
}


function divisao(){
    let valor1 = document.querySelector('#valor1').value;
    let valor2 = document.querySelector('#valor2').value;

    return document.getElementById('resultado').innerHTML = valor1 / valor2;
}

function clearAll(){
    document.querySelector('#valor1').value = "";
    document.querySelector('#valor2').value = "";
}