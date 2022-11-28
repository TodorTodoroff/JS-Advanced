import { html } from '../../node_modules/lit-html/lit-html.js'
import {getAllItem} from "../api/data.js"

export async function catalogView(ctx) {
    const items = await getAllItem();
    ctx.render(catalogTemplate(items));
}

function catalogTemplate(data) {
    return html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">
        ${Object.values(data).map(x => createItemTemp(x))}
    </div>
    `;
}

function createItemTemp(data){
    return html`
    <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=${data.img} />
                    <p>${data.description}</p>
                    <footer>
                        <p>Price: <span>${data.price} $</span></p>
                    </footer>
                    <div>
                        <a href="/details/${data._id}" class="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}