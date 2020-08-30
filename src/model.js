import img from './img/logo.svg';
import elbrus from './img/elbrus.png';
import beluha from './img/beluha.png';
import fisht from './img/fisht.png';

export const models = [
    {type: `navigation`, value: [`Tours`, `Training`, `About us`, `Contacts`], options: {
        styles: `padding: 5px 30px; color: white`,
        img: {
            path: `${img}`,
            alt: 'Logo company'
        }
    }},
    {type: `title`, value: `Hiking in the mountains of Russia`, options: {
        tag: `h1`,
        styles: `margin-bottom: 20px; padding-top: 250px; font-size: 45px; font-weight: bold; color: white;`
    }},
    {type: `text`, value: `We organize excursions professionally to the most beautiful peaks of the planet`, options: {
        styles: `padding-bottom: 240px; font-size: 24px; color: white`
    }},
    {type: `title`, value: `Сoming tours`, options: {
        tag: `h2`,
        styles: `margin-bottom: 20px; font-size: 40px; font-weight: bold; color: white; text-align: center`
    }},
    {type: `columns`, value: [
            {
                name: `Travel around Elbrus`,
                img: `${elbrus}`,
            },
            {
                name: `Path to the foot of Belukha`,
                img: `${beluha}`,
            },
            {
                name: `Through Fisht to the Black Sea`,
                img: `${fisht}`,
            }
        ], options: {
        styles: `margin: 0 auto; max-width: 1200px;`
    }},
];
