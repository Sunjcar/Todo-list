const createProject = () => {
    
        //Cache Dom
        const add = document.querySelector('.addBtn');
        const input = document.querySelector('.title')
        const name = document.querySelector('.project-name');
        const modal = document.getElementById('modal')
        const project = document.querySelector('.projects')
        const view = document.querySelector('.view-project');
        const addtasks = document.createElement('p');
        addtasks.classList.add('tasks');
        addtasks.textContent = '+ Add Task'
        addtasks.style.display = 'none'
        view.appendChild(addtasks);
        //Bind Events
        add.addEventListener('click', (e) => {
            if(input.value === ''){
                alert("Must Enter Name For Project")
                return;
            };
            const div =document.createElement('div')
            div.classList.add('project-list');
            project.appendChild(div)

            const projectsIcon = document.createElement('span');
            projectsIcon.classList.add("material-symbols-outlined")
            projectsIcon.textContent = 'receipt_long'
            div.appendChild(projectsIcon)

            const text = document.createElement('p');
            text.textContent = input.value
            div.appendChild(text);
 
            name.textContent = input.value
            
            modal.style.display = 'none';
            addtasks.style.display = 'block'
            e.preventDefault();
        }, false);
}

export default createProject
