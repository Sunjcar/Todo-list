const header = () => {
    //Creates Header Elements 
    const header = document.createElement('div');
    header.classList.add('header');

    const span = document.createElement('span');
    span.classList.add("material-symbols-outlined");
    span.textContent = 'event_avilable'
    
    const headText = document.createElement('div');
    headText.classList.add('head-text');
    headText.textContent = 'To-Do List';

    document.body.appendChild(header);
    header.appendChild(span);
    header.appendChild(headText);

}; header();

export default header