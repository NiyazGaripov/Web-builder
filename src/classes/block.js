export class Block {
    constructor(type, value, options) {
        this.type = type;
        this.value = value;
        this.options = options;
    }

    getTemplate() {
        throw new Error(`Abstract method not implemented: getTemplate`);
    }
}
