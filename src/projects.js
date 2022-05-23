const modal = () => {
    //Creat modal For Projects     
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
    
    //Append Elements
    document.body.appendChild(modal)
    modal.appendChild(modalContent);
    modalContent.appendChild(form)
    form.appendChild(titleInput);
    
    //Create modal for Today
    const modalOne = document.createElement('div')
    modalOne.classList.add('modal')
    modalOne.setAttribute('id', 'modal1')
    const modalContentOne = document.createElement('div');
    modalContentOne.classList.add('modal-content1');
    const todayForm = document.createElement('form')
    todayForm.classList.add('todayForm')
    const todayInput = document.createElement('input')
    todayInput.classList.add('today-input')
    todayInput.setAttribute('type', 'text')
    todayInput.setAttribute('id', 'Today')

    //Append Elements
    document.body.appendChild(modalOne)
    modalOne.appendChild(modalContentOne)
    modalContentOne.appendChild(todayForm)
    todayForm.appendChild(todayInput)

    //Create modal for Week
    const modalTwo = document.createElement('div')
    modalTwo.classList.add('modal')
    modalTwo.setAttribute('id', 'modal2')
    const modalContentTwo = document.createElement('div');
    modalContentTwo.classList.add('modal-content2');
    const weekForm = document.createElement('form')
    weekForm.classList.add('weekForm')
    const weekInput = document.createElement('input')
    weekInput.classList.add('week-input')
    weekInput.setAttribute('type', 'text')
    weekInput.setAttribute('id', 'week')

    //Append Elements
    document.body.appendChild(modalTwo)
    modalTwo.appendChild(modalContentTwo)
    modalContentTwo.appendChild(weekForm)
    weekForm.appendChild(weekInput)


};    
const projectTask = () => {

    //Create Div that displays project tasks
    const main = document.getElementById('main')
    const div = document.createElement('div');
    div.classList.add('view-project')
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('task-container')
    const name = document.createElement('p')
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
    //Project Tasks
    const taskForm = document.createElement('form')
    taskForm.classList.add('task-form')
    const taskInput = document.createElement('input')
    taskInput.classList.add('new-task')
    taskInput.style.display = 'none'

    //Today Tasks
    const todayTask = document.createElement('form')
    todayTask.classList.add('today-form')
    const todayInput = document.createElement('input')
    todayInput.classList.add('today-task')
    todayInput.style.display = 'none'

    //Week Tasks
    const weekTask = document.createElement('form')
    weekTask.classList.add('week-form')
    const weekInput = document.createElement('input')
    weekInput.classList.add('week-task')
    weekInput.style.display = 'none'

    main.appendChild(div);
    div.appendChild(name)
    div.appendChild(tasksContainer);
    div.appendChild(taskBody)
    taskBody.appendChild(tasks)
    taskBody.appendChild(taskCreator)
    taskBody.appendChild(deleteBtn)
    taskCreator.appendChild(taskForm)
    taskCreator.appendChild(todayTask)
    taskCreator.appendChild(weekTask)
    taskForm.appendChild(taskInput)
    todayTask.appendChild(todayInput)
    weekTask.appendChild(weekInput)


    };

export {projectTask,modal}