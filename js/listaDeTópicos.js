
let fruits = ['banana', 'avocado', 'kiwi', 'morango', 'maça'];

let numberList = document.getElementById('listaDeTopicos');

for(let i = 0; i <= 4; i++){
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(fruits[i]));
    // listItem.textContent = `Item: ${i}`
    numberList.appendChild(listItem);
}

