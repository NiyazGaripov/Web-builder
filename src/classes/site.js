export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    render(models) {
        this.$el.innerHTML = ``;
        models.forEach(model => {
            this.$el.insertAdjacentHTML(`beforeend`, model.getTemplate());
        })
    }
}
