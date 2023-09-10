
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

