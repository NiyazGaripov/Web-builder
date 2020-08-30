export const getRow = (content, styles = ``) => {
    const style = `margin: 0; ${styles}`

    return (
        `<div class="row" style="${style}">
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
