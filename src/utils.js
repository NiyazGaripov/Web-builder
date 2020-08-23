export const getRow = (content, styles = ``) => {
    return (
        `<div class="row" style="${styles}">
            ${content}
        </div>`
    );
};

export const getCol = (content) => {
    return (
        `<div class="col-sm">
            ${content}
        </div>`
    );
};
