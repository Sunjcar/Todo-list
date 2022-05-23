const createProject = () => {
    //Cache Dom
    const ProjectContainer = document.querySelector('.project-list')
    const newProjectForm = document.querySelector('.form')
    const newProjectInput = document.querySelector('.title')
    const modal = document.getElementById('modal')
    const listDisplayContainer = document.querySelector('.view-project')
    const listTitleElement = document.querySelector('.project-name')
    const listCountElement = document.querySelector('.task-count')
    const tasksContainer = document.querySelector('.task-container')
    const taskTemplate = document.getElementById('task-template')
    const newTaskForm = document.querySelector('.task-form')
    const newTaskInput = document.querySelector('.new-task')
    const addContent = document.querySelector('.add-content')
    const clearCompleteTasksButton = document.querySelector('.delete')
    const todayTask = document.querySelector('.today-form')
    const todayInput = document.querySelector('.today-input')
    const projects = document.querySelector('.project-list')
 

    newTaskInput.style.display = 'none'
    listTitleElement.textContent = 'Tasks'

    //Saves Data to local storage
    const LOCAL_STORAGE_LIST_KEY = 'task.lists'
    const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
    let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
    let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)
  

    //Bind Events
    ProjectContainer.addEventListener('click', e => {
        if (e.target.tagName.toLowerCase() === 'li') {
        selectedListId = e.target.dataset.listId
        saveAndRender();
        }
    })
    
    tasksContainer.addEventListener('click', e => {
        if (e.target.tagName.toLowerCase() === 'input') {
        const selectedList = lists.find(list => list.id === selectedListId)
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked
        save()
        }
    })
    
    clearCompleteTasksButton.addEventListener('click', e => {
        const selectedList = lists.find(list => list.id === selectedListId)
        selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
        saveAndRender() 
    })
    
  
    newProjectForm.addEventListener('submit', e => {
        e.preventDefault()
        modal.style.display = 'none'
        const listName = newProjectInput.value
        if (listName == null || listName === '') return
        const list = createList(listName)
        newProjectInput.value = null
        lists.push(list)
        saveAndRender()
        
    })
    
    
    newTaskForm.addEventListener('submit', e => {
        e.preventDefault()
        const taskName = newTaskInput.value
        if (taskName == null || taskName === '') return
        const task = createTask(taskName)
        newTaskInput.value = null
        const selectedList = lists.find(list => list.id === selectedListId) 
        selectedList.tasks.push(task)
        saveAndRender() 
        newProjectForm.style.display = 'none'
    })
    
    //Displays Modal
    addContent.addEventListener('click', () => {
        console.log('hello')
        modal.style.display = 'block'
      })

  

    //Displays current lists
 

    //Creates Unique ID and Task array for tasks
    function createList(name) {
        return { id: Date.now().toString(), name: name, tasks: [] }
    }
    
    function createTask(name) {
        return { id: Date.now().toString(), name: name}
    }

    function saveAndRender() {
        save()
        render()
    }
    
    function save() {
        localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
        localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
    }

    
    function render() {
        clearElement(ProjectContainer)
        renderLists()
    
        const selectedList = lists.find(list => list.id === selectedListId)
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

    function renderLists() {
        lists.forEach(list => {
        const project = document.createElement('div')
        project.classList.add('lists')
        ProjectContainer.appendChild(project)
        const left = document.createElement('div')
        left.classList.add('left-list')
        const right = document.createElement('div')
        right.classList.add('right-list')
        project.appendChild(left)
        project.appendChild(right)
        const remove = document.createElement('span')
        remove.classList.add('material-symbols-outlined')
        remove.textContent = 'delete'
        left.appendChild(remove)
        remove.addEventListener('click', e => {
            if (lists.length >= 1) {
            lists.splice(lists.indexOf(list), 1);
            saveAndRender()
            listDisplayContainer.textContent = ''
            newTaskInput.style.display = 'none'
            clearCompleteTasksButton.style.display = 'none'
            tasksContainer.style.display = 'none'
            listCountElement.style.display = 'none'
        } else if (lists.length === null) {
            lists = [];
            ProjectContainer.textContent = ''
            listTitleElement.textContent = 'Tasks'
            newTaskInput.style.display = 'none'
            clearCompleteTasksButton.style.display = 'none'
            tasksContainer.style.display = 'none'
            listCountElement.style.display = 'none'
            saveAndRender();
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
    
    function clearElement(element) {
        while (element.firstChild) {
        element.removeChild(element.firstChild)
        }
    }
   render();
}

export default createProject