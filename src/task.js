

const createProject = () => {
    
        //Cache Dom
        const add = document.querySelector('.addBtn');
        const input = document.querySelector('.title')
        const name = document.querySelector('.project-name');
        const modal = document.getElementById('modal')
        const project = document.querySelector('.projects')
        
        //Bind Events
        add.addEventListener('click', (e) => {
            
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
            if(input.value === ''){
                projectsIcon.textContent = ''
                alert("Must Enter Name For Project")
            }
        
            modal.style.display = 'none'
            e.preventDefault();
        }, false);

}

export default createProject


