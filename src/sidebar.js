const sidebar = () => {
    //Create Sidebar Elements
    const main = document.createElement('div')
    main.setAttribute('id', 'main')
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    //Container for styling
    const dayContent = document.createElement('div')
    dayContent.classList.add('content')
    const weekContent = document.createElement('div')
    weekContent.classList.add('content')
    const projectContent = document.createElement('div')
    projectContent.classList.add('content')
    
    const addContent = document.createElement('div');
    addContent.classList.add('add-content')
    addContent.setAttribute('id', 'add-project')
    //Content
    const today = document.createElement('div');
    today.classList.add('today');
    today.textContent = 'Today'

    const todayIcon = document.createElement('span');
    todayIcon.classList.add("material-symbols-outlined")
    todayIcon.textContent = 'calendar_today'

    const week = document.createElement('div');
    week.classList.add('week');
    week.textContent = 'Week'

    
    const weekIcon = document.createElement('span');
    weekIcon.classList.add("material-symbols-outlined")
    weekIcon.textContent = 'date_range'

    const projects = document.createElement('div')
    projects.classList.add('projects')
    projects.textContent = 'Projects'

    const addIcon = document.createElement('span')
    addIcon.classList.add("material-symbols-outlined")
    addIcon.textContent = 'add'

    const addproject = document.createElement('div')
    addproject.classList.add('add-project')
    addproject.textContent = "Add Project"

    document.body.appendChild(main);
    main.appendChild(sidebar);
    sidebar.appendChild(dayContent);
    sidebar.appendChild(weekContent);
    sidebar.appendChild(projectContent);
    sidebar.appendChild(addContent)
    dayContent.appendChild(todayIcon);
    dayContent.appendChild(today);
    weekContent.appendChild(weekIcon);
    weekContent.appendChild(week);
 
    projectContent.appendChild(projects);
    addContent.appendChild(addIcon)
    addContent.appendChild(addproject)

}

export default sidebar