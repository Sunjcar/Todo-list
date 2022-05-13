import header from './header'
import sidebar from './sidebar'
import modal from './modal'
import display from './displayModal'
import projects from './projects'
import createProject from './createProject'
import createTask from './tasks'




function render(){
    header();
    sidebar();
    projects();
    modal();
    display();
    createProject();
    createTask();
}render();


