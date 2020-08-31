import {Title} from "./title";
import {Text} from "./text";

const createForm = (type) => {
    return (
        `<form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="value">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="styles">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Create</button>
        </form>
        <hr />`
    );
}

export class Sidebar {
    constructor(selector) {
        this.$el = document.querySelector(selector);

        this.init();
    }

    init() {
        this.$el.addEventListener('submit', this.addBlock);
        this.$el.innerHTML = this.getTemplate();
    }

    getTemplate() {
        return Array.of(
            createForm(`title`),
            createForm(`text`)
        ).join('\n');
    }

    addBlock(evt) {
        evt.preventDefault();

        const type = evt.target.name;
        const value = evt.target.value.value;
        const styles = evt.target.styles.value;

        const Constructor = type === `title` ? Title : Text;
        const newBlock = new Constructor(value, {styles});

        evt.target.value.value = ``;
        evt.target.styles.value = ``;
    }
}
