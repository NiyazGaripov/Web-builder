import img from './img/logo.svg';

export const models = [
    {type: `navigation`, value: [`Tours`, `Training`, `About us`, `Contacts`], options: {
        styles: `padding: 5px 30px;`,
        img: {
            path: `${img}`,
            alt: 'Logo company'
        }
    }},
    {type: `title`, value: `Hiking in the mountains of Russia`, options: {
        tag: `h1`,
        styles: `margin-bottom: 20px; padding-top: 150px; font-size: 45px; font-weight: bold; color: white;`
    }},
    {type: `text`, value: `We organize excursions professionally to the most beautiful peaks of the planet`, options: {
        styles: `padding-bottom: 340px; font-size: 20px; color: white`
    }},
    {type: `columns`, value: [`first column`, `second column`, `third column`], options: {
        styles: `background-color: coral; text-align: center;`
    }},
];
