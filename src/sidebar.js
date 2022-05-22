const sidebar = () => {
    //Create Sidebar Elements
    const main = document.createElement('div')
    main.setAttribute('id', 'main')
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    //Container for styling
    const dayContent = document.createElement('div')
    dayContent.classList.add('content')
    const addDay = document.createElement('div')
    addDay.classList.add('add-today')
    const weekCon = document.createElement('div')
    weekCon.classList.add('content')
    const addWeek = document.createElement('div')
    addWeek.classList.add('add-week')
    const projectContent = document.createElement('div')
    projectContent.classList.add('content')
    const addContent = document.createElement('div');
    addContent.classList.add('add-content')
    

    //Creat Dom For Today 
    const todayContent = document.createElement('div')
    todayContent.classList.add('today-content')
    const today = document.createElement('div');
    today.classList.add('today');
    today.textContent = 'Today'
    const todaylist = document.createElement('div')
    todaylist.classList.add('today-list')
    const todayIcon = document.createElement('span');
    todayIcon.classList.add("material-symbols-outlined")
    todayIcon.textContent = 'calendar_today'
    const todayContainer = document.createElement('div')
    todayContainer.classList.add('today-list')  
    const addTodayIcon = document.createElement('span')
    addTodayIcon.classList.add('material-symbols-outlined')
    addTodayIcon.textContent = 'add_card'

    //Create Dom for Week
    const weekContent = document.createElement('div')
    weekContent.classList.add('week-content')
    const week = document.createElement('div')
    week.classList.add('week');
    week.textContent = 'Week'
    const weekIcon = document.createElement('span');
    weekIcon.classList.add("material-symbols-outlined")
    weekIcon.textContent = 'date_range'
    const weekContainer = document.createElement('div')
    weekContainer.classList.add('week-list')  
    const weekCreator = document.createElement('div') 
    weekCreator.classList.add('week-creator') 
    const weekForm = document.createElement('form')
    weekForm.classList.add('weekForm')
    const weekInput = document.createElement('input')
    weekInput.classList.add('week-input')
    const addWeekIcon = document.createElement('span')
    addWeekIcon.classList.add('material-symbols-outlined')
    addWeekIcon.textContent = 'add_card'
    

    //Create Dom for Projects
    const projects = document.createElement('div')
    projects.classList.add('projects')
    projects.textContent = 'Projects'

    const projectLists = document.createElement('div')
    projectLists.classList.add('project-list')

    const addIcon = document.createElement('span')
    addIcon.classList.add("material-symbols-outlined")
    addIcon.textContent = 'add'

    const addproject = document.createElement('div')
    addproject.classList.add('add-project')
    addproject.textContent = "Add Project"

    document.body.appendChild(main);
    main.appendChild(sidebar);
    sidebar.appendChild(dayContent);
    sidebar.appendChild(addDay)
    sidebar.appendChild(weekCon);
    sidebar.appendChild(addWeek)
    sidebar.appendChild(projectContent);
    sidebar.appendChild(addContent)
    dayContent.appendChild(todayContent)
    todayContent.appendChild(todayIcon);
    todayContent.appendChild(today);
    addDay.appendChild(addTodayIcon)
    today.appendChild(todayContainer)
    today.appendChild(todaylist)
    weekCon.appendChild(weekContent)
    weekContent.appendChild(weekIcon);
    weekContent.appendChild(week)
    addWeek.appendChild(addWeekIcon)
    week.appendChild(weekContainer)
    week.appendChild(weekCreator)
    
    
    projects.appendChild(projectLists)
    projectContent.appendChild(projects);
    addContent.appendChild(addIcon)
    addContent.appendChild(addproject)

}

export default sidebar