let randomNumber = Math.floor(Math.random() * 100);
let count = 0;

function checkGuess(){
    let number = document.getElementById('guess').value
    count += 1;

    if(number < randomNumber){
        return document.getElementById('message').innerHTML = 'Too low, try again!'
    }
    else if(number > randomNumber){
        return document.getElementById('message').innerHTML = 'Too high, try again'
    }
    else if(number == randomNumber){
        return document.getElementById('message').innerHTML = `Congratulations, the number is ${number}, ${count} tries!`; 
    }
}
    