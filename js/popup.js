const openModalButton = document.getElementById('openModal');

const modal = document.getElementById('modal');

// const closeModalButton = document.getElementsByClassName('close')[0];

const closeModalButton = document.querySelector('.close');


openModalButton.addEventListener('click', () => {
    modal.style.display = "block";
});

closeModalButton.addEventListener('clisk', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if(event.target == modal){
        modal.style.display = "none";
    }
});