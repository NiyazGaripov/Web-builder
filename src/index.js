import {models} from './model';
import './styles/main.css'
import {templates} from "./templates";

const site = document.querySelector('#site');

models.forEach(block => {
    let html;

    switch (block.type) {
        case "header":
            html = templates.createHeaderMarkup(block);
            break;
        case "title":
            html = templates.createTitleMarkup(block);
            break;
        case "text":
            html = templates.createTextMarkup(block);
            break;
        case "columns":
            html = templates.createColumnsMarkup(block);
            break;
        default:
            html = ``;
    }

    site.insertAdjacentHTML(`beforeend`, html);
})
