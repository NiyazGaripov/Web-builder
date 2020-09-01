import img from "./img/logo.svg";
import elbrus from "./img/elbrus.png";
import beluha from "./img/beluha.png";
import fisht from "./img/fisht.png";
import {getCss} from "./utils";
import {Header} from "./classes/header";
import {Title} from "./classes/title";
import {Text} from "./classes/text";
import {Column} from "./classes/column";

export const models = [
    new Header([`Tours`, `Training`, `About`, `Contacts`], {
        styles: getCss({
            padding: `5px 30px`,
            color: `white`,
        }),
        img: {
            path: `${img}`,
            alt: `Logo company`,
        }
    }),
    new Title(`Hiking in the mountains of Russia`, {
        tag: `h1`,
        styles: getCss({
            'margin-bottom': `20px`,
            'padding-top': `250px`,
            'font-size': `45px`,
            'font-weight': `bold`,
            color: `white`,
        })
    }),
    new Text(`We organize excursions professionally to the most beautiful peaks of the planet`, {
        styles: getCss({
            'padding-bottom': `240px`,
            'font-size': `24px`,
            color: `white`,
        })
    }),
    new Title(`Сoming tours`, {
        tag: `h2`,
        styles: getCss({
            'margin-bottom': `20px`,
            'font-size': `40px`,
            'font-weight': `bold`,
            color: `white`,
            'text-align': `center`,
        })
    }),
    new Column([
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
        styles: getCss({
            'margin': `0 auto`,
            'max-width': `1200px`,
        })
    }),
];
