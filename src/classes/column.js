import {getCol, getRow} from "../utils";
import {Block} from "./block";

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

export class Column extends Block {
    constructor(value, options) {
        super(value, options);
    }
}
