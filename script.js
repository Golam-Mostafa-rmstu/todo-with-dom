let form = document.querySelector('form');
let newTask = document.querySelector('input');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

// create task
let createTask = function(task){
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
}

//add task
let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";

    bindImCompleteTask(listItem, completeTask);
} 

let completeTask = function(){
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.className="delete";
    listItem.appendChild(deleteBtn);

    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    completeUl.appendChild(listItem);

    bindCompleteTask(listItem, deleteTask);
}

let deleteTask = function(){
    let listItem = this.parentNode;
    completeUl.removeChild(listItem);
}

let bindImCompleteTask = function(listItem, checkboxClick){
    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxClick;
}

let bindCompleteTask = function(listItem, deleteList){
    let deleteBtn = listItem.querySelector('.delete');
    deleteBtn.onclick = deleteList;
}

for(let i= 0; i < todoUl.children.length; i++){
    bindImCompleteTask(todoUl.children[i], completeTask);
}

for(let i = 0; i < completeUl.children.length; i++){
    bindCompleteTask(completeUl.children[i], deleteTask);
}
form.addEventListener('submit', addTask);