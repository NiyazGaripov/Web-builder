import {Block} from "./block";

const createImageMarkup = (block) => {
    console.log(block)
    const {name, imageStyles = ``} = block.options
    return `<img src="${block.value}" alt="${name}" style="${imageStyles}" />`
}

export class Image extends Block {
    constructor(value, options) {
        super(value, options)
    }

    getTemplate() {
        return createImageMarkup(this);
    }
}
