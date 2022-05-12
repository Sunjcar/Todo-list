const display = () => {

    //Cache Dom
    const addProject = document.getElementById('add-project')
    const modal = document.getElementById('modal')
    const cancel = document.querySelector('.cancelBtn')

    //Bind Events
    addProject.addEventListener('click', () => {
        resetForm();
        modal.style.display = 'block'
        console.log('hello')
    })

    function resetForm(){
        document.querySelector('.form').reset();
    }

    cancel.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}

export default display

