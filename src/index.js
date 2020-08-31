import {models} from './model';
import './styles/main.css'

const site = document.querySelector('#site');

models.forEach(block => {
    site.insertAdjacentHTML(`beforeend`, block.getTemplate());
})
