import img from './img/logo.svg';

export const models = [
    {type: `navigation`, value: [`Tours`, `Training`, `About us`, `Contacts`], options: {
        styles: `padding: 5px;`,
        img: {
            path: `${img}`,
            alt: 'Logo company'
        }
    }},
    {type: `title`, value: `Travel around the world`, options: {
        tag: `h2`,
        styles: `color: white; text-align: center; background-color: green;`
    }},
    {type: `text`, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur error expedita hic itaque maiores minus nulla numquam perferendis placeat sapiente!`, options: {
        styles: `padding: 10px;`
    }},
    {type: `columns`, value: [`first column`, `second column`, `third column`], options: {
        styles: `background-color: coral; text-align: center;`
    }},
];
