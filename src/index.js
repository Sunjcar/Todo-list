import header from './header'
import sidebar from './sidebar'
import {projectTask,modal} from './projects'
import createProject from './createProject'
import createToday from './Today'
import createWeek from './Week'



function renderModules(){
    header();
    sidebar();
    projectTask();
    modal();
    createToday();
    createProject();
    createWeek();
}renderModules();


