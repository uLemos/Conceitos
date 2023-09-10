
let numberList = document.getElementById('listaDeTopicos');

for(let i = 1; i <= 5; i++){
    let listItem = document.createElement('li');
    listItem.textContent = `Item: ${i}`
    numberList.appendChild(listItem);
}

