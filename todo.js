const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('removeBtn');
    removeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent marking as completed when removing
        li.remove();
    });

    li.appendChild(removeBtn);
    li.addEventListener('click', () => li.classList.toggle('completed'));

    taskList.appendChild(li);
    taskInput.value = '';
}
