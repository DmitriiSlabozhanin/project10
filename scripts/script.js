'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');
const myKey = 'todokey';

let todoData = [];

function saveDataToStorage() {
    localStorage.setItem(myKey, JSON.stringify(todoData));
}

function loadDataFromStorage() {
    todoData = JSON.parse(localStorage.getItem(myKey));

    if (!todoData) {
        todoData = [];
    }
}

const render = function() {

    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item) {
        let li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' + 
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';

        let spanTextTodo = document.createElement('span');
        spanTextTodo.classList.add('text-todo');
        spanTextTodo.textContent = item.value;
    
        let todoButtons = document.createElement('div');
        todoButtons.classList.add('todo-buttons');

        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        const btnTodoRemove = li.querySelector('.todo-remove');
        const btnTodoComplete = li.querySelector('.todo-complete');
        
        btnTodoRemove.addEventListener('click',  function() {
            item.value = '';
            let index = todoData.findIndex( item => item.value.trim() === '' );

            if ( index >= 0) {
                todoData.splice(index, 1);
            } else {
                console.log('Нет пустых элементов, удалять нечего');
            }
            saveDataToStorage();
            render();
        });
        
        btnTodoComplete.addEventListener('click', function() {
            item.completed = !item.completed;
            saveDataToStorage();
            render();
        });
    });
};
loadDataFromStorage();
render();   

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();

    if (headerInput.value.trim() === '') {
        ((str) => {
            alert(str);
        })('Поле не может быть пустым!');

    } else {
        const newTodo = {
            value: headerInput.value,
            completed: false
        };
        todoData.push(newTodo);
    }

    todoControl.reset();
    saveDataToStorage();
    render();
});

render();