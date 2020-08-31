export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    render(models) {
        models.forEach(model => {
            this.$el.insertAdjacentHTML(`beforeend`, model.getTemplate());
        })
    }
}
