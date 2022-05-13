const projects = () => {
    //Create Div that displays projects
    const main = document.getElementById('main')
    const div = document.createElement('div');
    div.classList.add('view-project')

    const name = document.createElement('h1')
    name.classList.add('project-name')

    const tasks = document.createElement('div')
    tasks.classList.add('task-list')


    main.appendChild(div);
    div.appendChild(name);
    div.appendChild(tasks);
}; 

export default projects