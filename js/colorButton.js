function trocarCor(){

    let cor = document.getElementById('titulo');
    let button = document.getElementById('troca');

    return cor.style.color = 'red';
}

function trocaBackground(){
    let fundo = `#${Math.floor(Math.random() * 10000)}`

    document.body.style.backgroundColor = fundo
}

function changeProfessor(){
    let colors = ['green', 'red', 'blue', 'orange', 'black']

    let random = colors[Math.floor(Math.random() * colors.length)]
    console.log(random)
    document.body.style.backgroundColor = random;
}


let a = 5.9
let result = Math.floor(a)

let random = Math.floor(Math.random() * 100)