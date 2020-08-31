import {Block} from './block';
import {getCol} from "../utils";

const createHeaderMarkup = (block) => {
    const {img, styles} = block.options;
    const path = block.value.map(it => `${it.charAt(0).toLowerCase()}${it.slice(1)}`);
    const item = block.value.map((it, index) => `<a href="${path[index]}" style="${styles}">${it}</a>`).join('\n');

    return getCol(
        `<header class="header">
            <img src="${img.path}" alt="${img.alt}">
            <nav>
                ${item}
            </nav>
        </header>`
    );
};


export class Header extends Block {
    constructor(value, options) {
        super(`header`, value, options);
    }

    getTemplate() {
        return createHeaderMarkup(this);
    }
}
