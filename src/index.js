import {models} from './model';
import './styles/main.css'

const createTitleMarkup = (block) => {
    return (
        `<div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>`
    );
};

const createTextMarkup = (block) => {
    return (
        `<div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>`
    );
};

const createColumnsMarkup = (block) => {
    const column = block.value.map(item => `<div class="col-sm"><p>${item}</p></div>`).join('');

    return (
        `<div class="row">
            ${column}
        </div>`
    );
};

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

    document.querySelector('#site').insertAdjacentHTML(`beforeend`, html);
})
