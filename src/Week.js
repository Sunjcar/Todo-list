const createWeek = () => {
    //Cache Dom
    const modalTwo = document.getElementById('modal2')
    const listDisplayContainer = document.querySelector('.view-project')
    const listTitleElement = document.querySelector('.project-name')
    const listCountElement = document.querySelector('.task-count')
    const tasksContainer = document.querySelector('.task-container')
    const taskTemplate = document.getElementById('task-template')
    const newTaskForm = document.querySelector('.week-form')
    const newTaskInput = document.querySelector('.week-task')
    const clearCompleteTasksButton = document.querySelector('.delete')
    const weekContainer = document.querySelector('.week-list')
    const newWeekForm = document.querySelector('.weekForm')
    const newWeekInput = document.querySelector('.week-input')
    const addWeek = document.querySelector('.add-week')

    modalTwo.style.display = 'block'

    newTaskInput.style.display = 'none'
    listTitleElement.textContent = 'Tasks'
    //Saves Data to local storage
    const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
    const LOCAL_STORAGE_WEEK_LIST_KEY = 'week.lists'
    let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)
    let weeklists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_WEEK_LIST_KEY)) || []

    //Bind Events
    weekContainer.addEventListener('click', e => {
        if (e.target.tagName.toLowerCase() === 'li') {
        selectedListId = e.target.dataset.listId
        saveAndRenderWeek()
        }
    })

    tasksContainer.addEventListener('click', e => {
        if (e.target.tagName.toLowerCase() === 'input') {
        const selectedList = weeklists.find(list => list.id === selectedListId);
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked
        save()
        }
    })
    
    clearCompleteTasksButton.addEventListener('click', e => {
        const selectedList = weeklists.find(list => list.id === selectedListId);
        selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
        saveAndRenderWeek()
    })

    newWeekForm.addEventListener('submit', e => {
        e.preventDefault()
        modalTwo.style.display = 'none'
        const listName = newWeekInput.value
        if (listName == null || listName === '') return
        const list = createList(listName)
        newWeekInput.value = null
        weeklists.push(list)
        saveAndRenderWeek()
    })

    newTaskForm.addEventListener('submit', e => {
        e.preventDefault()
        const taskName = newTaskInput.value
        if (taskName == null || taskName === '') return
        const task = createTask(taskName)
        newTaskInput.value = null
        const selectedList = weeklists.find(list => list.id === selectedListId);
        selectedList.tasks.push(task)
        saveAndRenderWeek()
    })

    //Displays Modal
    addWeek.addEventListener('click', () => {
        modalTwo.style.display = 'block'
    })

    //Creates Unique ID and Task array for tasks
    function createList(name) {
        return { id: Date.now().toString(), name: name, tasks: [] }
    }
    
    function createTask(name) {
        return { id: Date.now().toString(), name: name}
    }    

    function saveAndRenderWeek(){
        save()
        renderWeek()
    }    

    function save() {
        localStorage.setItem(LOCAL_STORAGE_WEEK_LIST_KEY, JSON.stringify(weeklists))
        localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
    }    

    function renderWeek (){
        clearElement(weekContainer)
        renderWeekLists()
    
        const selectedList = weeklists.find(list => list.id === selectedListId)
        if (selectedListId == null) {
        listTitleElement.textContent = 'Tasks'
        newTaskInput.style.display = 'none'
        clearCompleteTasksButton.style.display = 'none'
        } else {
        listTitleElement.innerText = selectedList.name
        newTaskInput.style.display = 'inline'
        clearCompleteTasksButton.style.display = 'inline'
        tasksContainer.style.display = 'inline'
        clearElement(tasksContainer)
        renderTasks(selectedList)
        }
    }    

    function renderWeekLists() {
        weeklists.forEach(list => {
        const week = document.createElement('div')
        week.classList.add('lists')
        weekContainer.appendChild(week)
        const left = document.createElement('div')
        left.classList.add('left-list')
        const right = document.createElement('div')
        right.classList.add('right-list')
        week.appendChild(left)
        week.appendChild(right)
        const remove = document.createElement('span')
        remove.classList.add('material-symbols-outlined')
        remove.textContent = 'delete'
        left.appendChild(remove)
        remove.addEventListener('click', e => {
            if (weeklists.length > 1) {
            weeklists.splice(weeklists.indexOf(list), 1);
            saveAndRenderWeek()
            listDisplayContainer.textContent = ''
            newTaskInput.style.display = 'none'
            clearCompleteTasksButton.style.display = 'none'
            tasksContainer.style.display = 'none'
            listCountElement.style.display = 'none'
        } else if (weeklists.length === 1) {
            weeklists = [];
            weekContainer.textContent = ''
            listTitleElement.textContent = 'Tasks'
            newTaskInput.style.display = 'none'
            clearCompleteTasksButton.style.display = 'none'
            tasksContainer.style.display = 'none'
            saveAndRenderWeek();
        }
        })
        
        const icon = document.createElement('span')
        icon.classList.add('material-symbols-outlined')
        icon.textContent = 'receipt_long'
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("list")
        listElement.textContent = list.name
        if (list.id === selectedListId) {
            listElement.classList.add('active')
        }
        right.appendChild(icon)
        right.appendChild(listElement)
        })

    }      

    function renderTasks(selectedList) {
        selectedList.tasks.forEach(task => {
        const taskCount = document.createElement('p')
        const taskList =document.createElement('div')
        taskList.classList.add('task-lists')
        tasksContainer.appendChild(taskCount)
        tasksContainer.appendChild(taskList)
        const left = document.createElement('div')
        left.classList.add('left-task')
        const right = document.createElement('div')
        right.classList.add('right-task')
        taskList.appendChild(left)
        taskList.appendChild(right)
        const icon = document.createElement('span')
        icon.classList.add('material-symbols-outlined')
        icon.textContent = 'tips_and_updates'
        const dateInput = document.createElement('input')
        dateInput.classList.add('date')
        dateInput.setAttribute('type', 'date')
        right.appendChild(dateInput);
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = task.id
        checkbox.checked = task.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = task.id
        label.append(task.name)
        left.appendChild(icon)
        left.appendChild(taskElement)
        })
    }    
    function clearElement(element) {
        while (element.firstChild) {
        element.removeChild(element.firstChild)
        }
    }
   renderWeek();    
}


export default createWeek