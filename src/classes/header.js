import {Block} from './block';

export class Header extends Block {
    constructor(value, options) {
        super(`header`, value, options);
    }
}
