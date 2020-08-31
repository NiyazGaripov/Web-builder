import img from './img/logo.svg';
import elbrus from './img/elbrus.png';
import beluha from './img/beluha.png';
import fisht from './img/fisht.png';
import {Block} from './classes/block';

export const models = [
    new Block(`header`, [`Tours`, `Training`, `About`, `Contacts`], {
        styles: `padding: 5px 30px; color: white`,
        img: {
            path: `${img}`,
            alt: 'Logo company',
        }
    }),
    new Block(`title`, `Hiking in the mountains of Russia`, {
        tag: `h1`,
        styles: `margin-bottom: 20px; padding-top: 250px; font-size: 45px; font-weight: bold; color: white;`,
    }),
    new Block(`text`, `We organize excursions professionally to the most beautiful peaks of the planet`, {
        styles: `padding-bottom: 240px; font-size: 24px; color: white`,
    }),
    new Block(`title`, `Сoming tours`, {
        tag: `h2`,
        styles: `margin-bottom: 20px; font-size: 40px; font-weight: bold; color: white; text-align: center`,
    }),
    new Block(`columns`, [
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
    ], {
        styles: `margin: 0 auto; max-width: 1200px;`
    }),
];
