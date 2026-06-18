// todo list
const input = document.getElementById('todo-input');
const button = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

button.addEventListener('click', addTodo);

input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});

savedTodos.forEach(function (todoText) {
  createTodo(todoText);
});

function addTodo() {
  const text = input.value.trim();
  if (text === '') {
    alert('Please enter a todo item.');
    return;
  }

  createTodo(text);
  saveTodos();
  input.value = '';
}

function createTodo(text) {
  const li = document.createElement('li');
  li.textContent = text;

  const del = document.createElement('button');
  del.textContent = 'Delete';
  del.className = 'delete-btn';
  del.addEventListener('click', function () {
    list.removeChild(li);
    saveTodos();
  });
  li.appendChild(del);

  list.appendChild(li);
}

function saveTodos() {
  const todos = [];

  document.querySelectorAll('#todo-list li').forEach(function (li) {
    todos.push(li.firstChild.textContent);
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}
