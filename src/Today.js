const createToday = () => {
    //Cache Dom
    const modalOne = document.getElementById('modal1')
    const listDisplayContainer = document.querySelector('.view-project')
    const listTitleElement = document.querySelector('.project-name')
    const listCountElement = document.querySelector('.task-count')
    const tasksContainer = document.querySelector('.task-container')
    const taskTemplate = document.getElementById('task-template')
    const newTaskForm = document.querySelector('.today-form')
    const newTaskInput = document.querySelector('.today-task')
    const clearCompleteTasksButton = document.querySelector('.delete')
    const todayContainer = document.querySelector('.today-list')
    const newTodayForm = document.querySelector('.todayForm')
    const newTodayInput = document.querySelector('.today-input')
    const addToday = document.querySelector('.add-today')

    listTitleElement.textContent = 'Tasks'
    //Saves Data to local storage
    const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
    const LOCAL_STORAGE_TODAY_LIST_KEY = 'today.lists'
    let todaylists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODAY_LIST_KEY)) || []
    let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

    //Bind Events
    todayContainer.addEventListener('click', e => {
        if (e.target.tagName.toLowerCase() === 'li') {
        selectedListId = e.target.dataset.listId
        clearCompleteTasksButton.style.display = 'block'
        saveAndRenderToday()
        }
    })

    tasksContainer.addEventListener('click', e => {
        if (e.target.tagName.toLowerCase() === 'input') {
        const selectedList = todaylists.find(list => list.id === selectedListId) 
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked
        save()
        }
    })
    
    clearCompleteTasksButton.addEventListener('click', e => {
        const selectedList = todaylists.find(list => list.id === selectedListId) 
        selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
        saveAndRenderToday()
    })

    newTodayForm.addEventListener('submit', e => {
        e.preventDefault()
        modalOne.style.display = 'none'
        const listName = newTodayInput.value
        if (listName == null || listName === '') return
        const list = createList(listName)
        newTodayInput.value = null
        todaylists.push(list)
        saveAndRenderToday()
    })

    newTaskForm.addEventListener('submit', e => {
        e.preventDefault()
        const taskName = newTaskInput.value
        if (taskName == null || taskName === '') return
        const task = createTask(taskName)
        newTaskInput.value = null
        const selectedList = todaylists.find(list => list.id === selectedListId)
        selectedList.tasks.push(task)
        saveAndRenderToday()
    })

    //Displays Modal
    addToday.addEventListener('click', () => {
        modalOne.style.display = 'block'
    })

    //Creates Unique ID and Task array for tasks
    function createList(name) { 
        return { id: Date.now().toString(), name: name, tasks: [] }
    }
    
    function createTask(name) {
        return { id: Date.now().toString(), name: name}
    }

    function saveAndRenderToday(){
        save()
        renderToday()
    }

    function save() {
        localStorage.setItem(LOCAL_STORAGE_TODAY_LIST_KEY, JSON.stringify(todaylists))
        localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
    }

    function renderToday (){
        clearElement(todayContainer)
        renderTodayLists()
    
        const selectedList = todaylists.find(list => list.id === selectedListId)
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

    function renderTodayLists() {
        todaylists.forEach(list => {
        const today = document.createElement('div')
        today.classList.add('lists')
        todayContainer.appendChild(today)
        const left = document.createElement('div')
        left.classList.add('left-list')
        const right = document.createElement('div')
        right.classList.add('right-list')
        today.appendChild(left)
        today.appendChild(right)
        const remove = document.createElement('span')
        remove.classList.add('material-symbols-outlined')
        remove.textContent = 'delete'
        left.appendChild(remove)
        remove.addEventListener('click', e => {
            if (todaylists.length > 1) {
            todaylists.splice(todaylists.indexOf(list), 1);
            saveAndRenderToday()
            listDisplayContainer.text = ''
            newTaskInput.style.display = 'none'
            clearCompleteTasksButton.style.display = 'none'
            tasksContainer.style.display = 'none'
            listCountElement.style.display = 'none'
        } else if (todaylists.length === 1) {
            todaylists = [];
            todayContainer.text = ''
            listTitleElement.textContent = 'Tasks'
            newTaskInput.style.display = 'none'
            clearCompleteTasksButton.style.display = 'none'
            tasksContainer.style.display = 'none'
            saveAndRenderToday();
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
             listElement.classList.toggle('active')
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
    renderToday();
}

export default createToday