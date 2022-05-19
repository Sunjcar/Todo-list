import header from './header'
import sidebar from './sidebar'
import {projectTask,modal} from './projects'
import createProject from './createProject'


function renderModules(){
    header();
    sidebar();
    projectTask();
    modal();
    createProject();
}renderModules();


