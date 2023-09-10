// console.log('Meu nome é Fernando');
// var a = 2;
// var b = 3;

// var nome = 'Fernando Lemos';
// var idade = 21;

// function soma(a, b){
//     return a + b;
// }

// function subtracao(a, b){
//     return a - b;
// }

// function multplicacao(a, b){
//     return a * b;
// }

// function divisao(a, b){
//     return a / b;
// }

// console.log('O resultado da soma é ' + soma());
// console.log(`Meu nome é ${nome} e tenho ${idade} anos!`);

// console.log(`soma: ${soma(2, 2)}`)
// console.log(`subtracao: ${subtracao(10, 5)}`);
// console.log(`multiplicacao: ${multplicacao(2, 2)}`);
// console.log(`divisao: ${divisao(10, 2)}`);

// // let firstName = prompt('Digite o seu primeiro nome:');

// // let lastName = prompt('Digite seu último nome:');

// // idade = parseInt(prompt('Digite a sua idade:'));

// idade = idade + 5; //idade é uma string por estar vindo do prompt, porém, o parseInt é o convert.
// console.log(idade);

// // console.log(`O seu nome é ${firstName} ${lastName} e a sua idade é de ${idade} anos!`);

// let firstName = prompt('Digite seu nome aqui:');
// document.getElementById('greeting').innerHTML = `Hello World, ${firstName}!`;

// function Envio(){
//     return document.getElementById('resultado').innerHTML = `Seu nome é: ${nome}`; 
// }


// for(let i = 0; i < 10; i++){
//     console.log('hi')
// }

let colorList = []

for(let i = 1; i <= 3; i++){
    let userColor = prompt('Digite a cor:');
    colorList.push(userColor);
}

alert(`Sua lista de cores ficou assim: ${colorList}`);

document.getElementById('listaCores').innerHTML = colorList;