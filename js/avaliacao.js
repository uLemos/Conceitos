let grade = prompt('Digite uma nota do aluno');

if(grade > 100){
    alert('Nota inválida');
}
else if(grade >= 60 && grade <= 100){
    alert('Aluno aprovado');
}
else if(grade >= 40 && grade < 60){
    alert('Aluno de recuperação!')
}
else{
    alert('Aluno reprovado!');
}