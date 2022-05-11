const modal = () => {
    //Cache Dom
    
    const modal = document.getElementById('modal')
    const modalContent = document.createElement('modal-content');
    modalContent.classList.add('modal-content');

    const form = document.createElement('form');
    form.classList = ('form')

    const titleInput = document.createElement('input')
    titleInput.classList.add('title')
    titleInput.setAttribute('type', 'text')

    //Create Elements
    modal.appendChild(modalContent);
    modalContent.appendChild(form)
    form.appendChild(titleInput);
};

export default modal;