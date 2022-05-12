const modal = () => {
    //Cache Dom
    
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.setAttribute('id', 'modal')
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const form = document.createElement('form');
    form.classList = ('form')

    const titleInput = document.createElement('input')
    titleInput.classList.add('title')
    titleInput.setAttribute('type', 'text')

    const btnContent = document.createElement('div')
    btnContent.classList.add('buttons')

    const add = document.createElement('button')
    add.classList.add('addBtn')
    add.textContent = "Add"

    const cancel = document.createElement('button')
    cancel.classList.add('cancelBtn')
    cancel.setAttribute('type', 'button')
    cancel.textContent = "Cancel"

    //Create Elements
    document.body.appendChild(modal)
    modal.appendChild(modalContent);
    modalContent.appendChild(form)
    form.appendChild(titleInput);
    form.appendChild(btnContent)
    btnContent.appendChild(add);
    btnContent.appendChild(cancel);
};

export default modal;