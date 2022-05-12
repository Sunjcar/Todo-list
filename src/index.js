import header from './header'
import sidebar from './sidebar'
import modal from './modal'
import display from './displayModal'
import projects from './projects'
import createProject from './task'




function render(){
    header();
    sidebar();
    projects();
    modal();
    display();
    createProject();
}render();


