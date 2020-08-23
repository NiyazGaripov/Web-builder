import {getCol, getRow} from "./utils";

const createTitleMarkup = (block) => {
    return getRow(getCol(
        `<h1>${block.value}</h1>`
        )
    );
};

const createTextMarkup = (block) => {
    return getRow(getCol(
        `<p>${block.value}</p>`
        )
    );
};

const createColumnsMarkup = (block) => {
    const column = block.value.map(item => getCol(`<p>${item}</p>`)).join('');

    return getRow(column);
};

export const templates = {createTitleMarkup, createTextMarkup, createColumnsMarkup}
