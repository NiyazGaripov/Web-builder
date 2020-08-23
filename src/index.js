import {models} from './model';
import './styles/main.css'
import {createColumnsMarkup, createTextMarkup, createTitleMarkup} from "./templates";

const site = document.querySelector('#site');

models.forEach(block => {
    let html;

    switch (block.type) {
        case "title":
            html = createTitleMarkup(block);
            break;
        case "text":
            html = createTextMarkup(block);
            break;
        case "columns":
            html = createColumnsMarkup(block);
            break;
        default:
            html = ``;
    }

    site.insertAdjacentHTML(`beforeend`, html);
})
