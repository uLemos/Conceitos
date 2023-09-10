
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

