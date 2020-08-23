import {getCol, getRow} from "./utils";

const createTitleMarkup = (block) => {
    const {tag, styles} = block.options;

    return getRow(getCol(
        `<${tag}>${block.value}</${tag}>`
    ), styles);
};

const createTextMarkup = (block) => {
    return getRow(getCol(
        `<p>${block.value}</p>`
    ), block.options.styles);
};

const createColumnsMarkup = (block) => {
    const column = block.value.map(item => getCol(`<p>${item}</p>`)).join('');

    return getRow(column, block.options.styles);
};

export const templates = {createTitleMarkup, createTextMarkup, createColumnsMarkup}
