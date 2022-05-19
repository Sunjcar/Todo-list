

const modal = () => {
    //Cache Dom
        
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.setAttribute('id', 'modal')
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    
    const form = document.createElement('form');
    form.classList = ('form')
    form.setAttribute('data','new-project-form')

    const titleInput = document.createElement('input')
    titleInput.classList.add('title')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('id', 'title')
    
    //Create Elements
    document.body.appendChild(modal)
    modal.appendChild(modalContent);
    modalContent.appendChild(form)
    form.appendChild(titleInput);
};    
const projectTask = () => {
   
    //Create Div that displays project tasks
    const main = document.getElementById('main')
    const div = document.createElement('div');
    div.classList.add('view-project')
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('task-container')
    const name = document.createElement('h1')
    name.classList.add('project-name')
    const taskBody = document.createElement('div')
    taskBody.classList.add('task-body')
    const tasks = document.createElement('div')
    tasks.classList.add('tasks')
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.textContent = 'Clear Completed Tasks'

    //Creates container and form input for tasks
    const taskCreator = document.createElement('div')
    taskCreator.classList.add('task-creator')
    const taskForm = document.createElement('form')
    taskForm.classList.add('task-form')
    const taskInput = document.createElement('input')
    taskInput.classList.add('new-task')

    main.appendChild(div);
    div.appendChild(tasksContainer);
    div.appendChild(taskBody)
    tasksContainer.appendChild(name)
    taskBody.appendChild(tasks)
    taskBody.appendChild(taskCreator)
    taskBody.appendChild(deleteBtn)
    taskCreator.appendChild(taskForm)
    taskForm.appendChild(taskInput)
    };

export {projectTask,modal}