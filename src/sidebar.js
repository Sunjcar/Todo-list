const sidebar = () => {
    //Create Sidebar Elements
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const today = document.createElement('div');
    today.classList.add('today');
    today.textContent = 'Today'

    const week = document.createElement('div');
    week.classList.add('week');
    week.textContent = 'Week'

    const projects = document.createElement('div')
    projects.textContent = 'Projects'

    document.body.appendChild(sidebar);
    sidebar.appendChild(today);
    sidebar.appendChild(week);
    sidebar.appendChild(projects);
}

export default sidebar