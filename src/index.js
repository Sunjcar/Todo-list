import header from './header'
import sidebar from './sidebar'
import modal from './modal'
import display from './displayModal'


//Cache Dom
const addproject = document.querySelector('.add-content')
const moda = document.getElementById('modal');


function render(){
    header();
    sidebar();
    modal();
    display();
}render();


