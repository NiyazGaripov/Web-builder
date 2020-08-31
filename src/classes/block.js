export class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    getTemplate() {
        throw new Error(`Abstract method not implemented: getTemplate`);
    }
}
