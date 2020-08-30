import {getCol, getRow} from "./utils";

const createHeaderMarkup = (block) => {
    const {img, styles} = block.options;
    const item = block.value.map(it => `<a href="" style="${styles}">${it}</a>`).join('\n');

    return (
        `<header class="header">
            <img src="${img.path}" alt="${img.alt}">
            <nav>
                ${item}
            </nav>
        </header>`
    );
};

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

export const templates = {createHeaderMarkup, createTitleMarkup, createTextMarkup, createColumnsMarkup}
