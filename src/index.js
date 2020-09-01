import {models} from './model';
import {Sidebar} from "./classes/sidebar";
import {Site} from "./classes/site";
import './styles/main.css'

const site = new Site('#site');
site.render(models);

const update = (newBlock) => {
    models.push(newBlock);
    site.render(models);
}

new Sidebar('#panel', update);
