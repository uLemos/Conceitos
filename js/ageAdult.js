
// function verifyAge(){
//     let age = document.getElementById('age').value;
    
//     if(age >= 12 && age < 14){
//         alert('Você não é adolescente, você é pré-adolescente!')
//     }
//     else if(age >= 14 && age < 18){
//         alert('Você é adolescente!')
//     }
//     else if(age >= 18){
//         alert('Você é adulto!')
//     }
//     else {
//         alert('Você é criança!')
//     }
// }

let verifyAge = document.getElementById('verifyCheck');
let ageInput = document.getElementById('age');

verifyAge.addEventListener('click', function() {
    let age = ageInput.value;
    let message = age >= 18 ? 'Você é adulto' : 'Você não é adulto';

    alert(message);
    ageInput.value = '';
})

let click = document.getElementById('calculo');
let options = document.getElementById('operators')

let valor1 = document.getElementById('numero1');
let valor2 = document.getElementById('numero2');

click.addEventListener('click', function(){

let n1 = Number(valor1.value);
let n2 = Number(valor2.value);
let op = options.value;
let result
    
    switch(op){
        case '+':
            result = n1 + n2;
             break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        default:
            result = 'Resultado inválido!'
            break;
    }

    document.getElementById('result').innerHTML = result;    
    
    valor1.value = '';
    valor2.value = '';
});


let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let output = document.getElementById('resultado');

function showEventNumbers(){
    let inicial = Number(n1.value);
    let final = Number(n2.value);
    let saida = 0;

    let i = inicial;

    while(i <= final){
        if(i % 2 == 0){
            saida = saida + i + ' '
            output.innerHTML = saida;
        }
        i++;
    }
}

let numero1 = document.getElementById('inicial');
let numero2 = document.getElementById('final');
let output2 = document.getElementById('resultado2');

function showEventNumbersImpares(){
    let inicial = Number(numero1.value);
    let final = Number(numero2.value);
    let saida = 0;

    let i = inicial;

    do{
        if(i % 2 !== 0){
            saida = saida + i + ' '
            output2.innerHTML = saida;
        }
        i++;
    }while(i <= final)
}

    // while(i <= final){
    //     if(i % 2 !== 0){
    //         saida = saida + i + ' '
    //         output2.innerHTML = saida;
    //     }
    //     i++;
    // }
