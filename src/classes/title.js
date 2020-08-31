import {getCol, getRow} from "../utils";
import {Block} from './block';

const createTitleMarkup = (block) => {
    const {tag, styles} = block.options;

    return getRow(getCol(
        `<${tag}>${block.value}</${tag}>`
    ), styles);
};

export class Title extends Block {
    constructor(value, options) {
        super(value, options);
    }
}
