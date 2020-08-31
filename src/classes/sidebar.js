export class Sidebar {
    constructor(selector) {
        this.$el = document.querySelector(selector);

        this.init();
    }

    init() {
        this.$el.innerHTML = `<h3>Test</h3>`
    }
}
