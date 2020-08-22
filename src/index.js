import {models} from './model';
import './styles/main.css'

const createTitleMarkup = (block) => {
    return (
        `<div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>`
    )
}
