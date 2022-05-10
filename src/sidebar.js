const sidebar = () => {
    //Create Sidebar Elements
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    //Container for styling
    const dayContent = document.createElement('div')
    dayContent.classList.add('content')
    const weekContent = document.createElement('div')
    weekContent.classList.add('content')
    const projectContent = document.createElement('div')
    projectContent.classList.add('content')

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

    const projectsIcon = document.createElement('span');
    projectsIcon.classList.add("material-symbols-outlined")
    projectsIcon.textContent = 'receipt_long'

    document.body.appendChild(sidebar);
    sidebar.appendChild(dayContent);
    sidebar.appendChild(weekContent);
    sidebar.appendChild(projectContent)
    dayContent.appendChild(todayIcon);
    dayContent.appendChild(today);
    weekContent.appendChild(weekIcon);
    weekContent.appendChild(week);
    projectContent.appendChild(projectsIcon);
    projectContent.appendChild(projects);
}

export default sidebar