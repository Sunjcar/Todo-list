const createTask = () => {
    //Cache Dom
    const view = document.querySelector('.view-project');
    const addtasks = document.querySelector('.tasks')
    const taskList = document.querySelector('.task-list')
    const text = document.createElement('input');
    text.classList.add('task-text');
    text.setAttribute('type', 'text')
    text.style.display = 'none'

    const div = document.createElement('div');
    div.classList.add('task-container');

    const add = document.createElement('button')
    add.classList.add('addBtn')
    add.style.display = 'none'
    add.textContent = 'Add'

    const cancel = document.createElement('button')
    cancel.classList.add('cancelBtn')
    cancel.style.display = 'none'
    cancel.textContent = 'Cancel'

    
    view.appendChild(text);
    view.appendChild(div);
    div.appendChild(add);
    div.appendChild(cancel);
    //Bind Events
    addtasks.addEventListener('click', (e) => {
        text.value = ''
        text.style.display = 'inline'
        add.style.display = 'inline'
        cancel.style.display = 'inline'
        addtasks.style.display = 'none'
        
    })

    cancel.addEventListener('click', () => {
        text.style.display = 'none'
        add.style.display = 'none'
        cancel.style.display = 'none'
        addtasks.style.display = 'block'
    })

    add.addEventListener('click', () => {
        if(text.value === ''){
            alert("Can't add empty tasks!")
            return
        }
        const p = document.createElement('p')
        p.setAttribute('id','task')
        p.textContent = text.value
        taskList.appendChild(p)
        text.style.display = 'none'
        add.style.display = 'none'
        cancel.style.display = 'none'
        addtasks.style.display = 'block'

    })

}

export default createTask