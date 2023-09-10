let a = 15;
let b = 10;
let c = 2;

let resultadoE = a > b && a < c;
let resultadoOU = a > b || a < c;
// console.log(resultadoE);
// console.log(resultadoOU);

let idade = prompt('Digite sua idade:')
let titulo = prompt('Tem titulo de eleitor:')
let idadeMinima = 18;

if(idade >= idadeMinima && titulo == 'sim'){
    alert('Pode votar!')
}
else if(idade < 18 && titulo == 'sim'){
    alert('Você deve ser maior de idade para votar!')
}
else if(idade >= 18 && titulo == 'não'){
    alert('Você precisa de título de eleitor!')
}
else{
    alert('Você não pode votar!')
}
