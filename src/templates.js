
const createTitleMarkup = (block) => {
    return (
        `<div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>`
    );
};

const createTextMarkup = (block) => {
    return (
        `<div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>`
    );
};

const createColumnsMarkup = (block) => {
    const column = block.value.map(item => `<div class="col-sm"><p>${item}</p></div>`).join('');

    return (
        `<div class="row">
            ${column}
        </div>`
    );
};

export const templates = {createTitleMarkup, createTextMarkup, createColumnsMarkup}
