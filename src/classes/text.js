import {getCol, getRow} from "../utils";
import {Block} from "./block";

const createTextMarkup = (block) => {
    return getRow(getCol(
        `<p style="margin-bottom: 0">${block.value}</p>`
    ), block.options.styles);
};

export class Text extends Block {
    constructor(value, options) {
        super(value, options);
    }

    getTemplate() {
        return createTextMarkup(this);
    }
}
