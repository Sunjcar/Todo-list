const display = () => {

    //Cache Dom
    const addProject = document.getElementById('.add-project')
    const modal = document.getElementById('modal')

    addProject.addEventListener('click', () => {
        resetForm();
        modal.style.display = 'block'
        console.log('hello')
    })

    function resetForm(){
        document.querySelector('.form').reset();
    }
}

export default display