import {getRow} from "./utils";

const createTitleMarkup = (block) => {
    return getRow(
        `<div class="col-sm">
            <h1>${block.value}</h1>
        </div>`
    );
};

const createTextMarkup = (block) => {
    return getRow(
        `<div class="col-sm">
            <p>${block.value}</p>
        </div>`
    );
};

const createColumnsMarkup = (block) => {
    const column = block.value.map(item => `<div class="col-sm"><p>${item}</p></div>`).join('');

    return getRow(column);
};

export const templates = {createTitleMarkup, createTextMarkup, createColumnsMarkup}
