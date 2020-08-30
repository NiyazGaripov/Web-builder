import {getCol, getRow} from "./utils";

const createHeaderMarkup = (block) => {
    const {img, styles} = block.options;
    const item = block.value.map(it => `<a href="" style="${styles}">${it}</a>`).join('\n');

    return getCol(
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
        `<p style="margin-bottom: 0">${block.value}</p>`
    ), block.options.styles);
};

const createColumnMarkup = (item) => {
    const {name, img} = item;

    return (
        `<a href="" class="card">
            <h3 class="card__title">${name}</h3>
            <img src="${img}" alt="${name}">
        </a>`
    );
}

const createColumnsMarkup = (block) => {
    const column = block.value.map(item => getCol(createColumnMarkup(item))).join('');

    return getRow(column, block.options.styles);
};

export const templates = {createHeaderMarkup, createTitleMarkup, createTextMarkup, createColumnsMarkup}
