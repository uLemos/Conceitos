document.querySelector('#push').onclick = () => {
    if(document.querySelector('#newTask input').value.length == 0){
        alert('Kindly Enter Task Name!!!!');
    }
    else{
        document.querySelector('#tasks').innerHTML += `<div class="newTask">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>    
        `;

        var current_tasks = document.querySelectorAll('.delete');

        for(let i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = () => {
                this.parentNode.remove();
            }
        }
    }
}