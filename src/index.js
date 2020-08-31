import {models} from './model';
import {Site} from "./classes/site";
import './styles/main.css'

const site = new Site('#site');
site.render(models);
