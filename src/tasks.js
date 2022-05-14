const createTask = () => {
    //Cache Dom
    const view = document.querySelector('.view-project');
    const addtasks = document.querySelector('.tasks')
    const taskList = document.querySelector('.task-list')
    const text = document.createElement('input');
    text.classList.add('task-text');
    text.setAttribute('type', 'text')
    text.style.display = 'none'

    //Create Element
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

        const task = document.createElement('div')
        task.classList.add('task-bar')
        taskList.appendChild(task)

        const rightTask = document.createElement('div')
        rightTask.classList.add('right-task')
        const leftTask = document.createElement('div')
        leftTask.classList.add('left-task')
        task.appendChild(leftTask)
        task.appendChild(rightTask)

        const remove = document.createElement('span')
        remove.classList.add("material-symbols-outlined")
        remove.textContent = 'remove'
        leftTask.appendChild(remove)

        const p = document.createElement('p')
        p.setAttribute('id','task')
        p.textContent = text.value
        leftTask.appendChild(p)

        const pInput = document.createElement('input')
        pInput.value = p.textContent
        pInput.style.display = 'none'
        leftTask.appendChild(pInput)

        const date = document.createElement('p')
        date.classList.add('date')
        date.textContent = 'Choose A Date'
        rightTask.appendChild(date);

        const dateInput = document.createElement('input')
        dateInput.setAttribute('type', 'date')
        dateInput.style.display = 'none'
        rightTask.appendChild(dateInput);

        remove.addEventListener('click', () => {
            task.remove();
        })

        p.addEventListener('click',() =>{
            pInput.style.display = 'inline'
            p.style.display = 'none'
        })

        pInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter'){
                pInput.style.display = 'none'
                p.style.display = 'inline'
                p.textContent = pInput.value
                e.preventDefault();
            }
        })

        date.addEventListener('click', ()=> {
           dateInput.style.display = 'inline'
           date.style.display = 'none'
        }) 

        text.style.display = 'none'
        add.style.display = 'none'
        cancel.style.display = 'none'
        addtasks.style.display = 'block'
    })



}

export default createTask