import { getAll } from '../api/data.js';
import { html } from '../lib.js'

const catalogTemplate = (boots) => html`
        <section id="dashboard">
            <h2>Collectibles</h2>
            <ul class="card-wrapper">
            ${boots.length == 0 ? html`
            <h2>There are no items added yet.</h2>`
            : boots.map(cardTemplate)}
            </ul>
        
        </section>`;


const cardTemplate = (boot) => html`
            <li class="card">
                <img src=${boot.imageUrl} alt="travis" />
                <p>
                    <strong>Brand: </strong><span class="brand">${boot.brand}</span>
                </p>
                <p>
                    <strong>Model: </strong><span class="model">${boot.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${boot.value}</span>$</p>
                <a class="details-btn" href="/details/${boot._id}">Details</a>
            </li>`;


export async function showCatalog(ctx) {
    const boots = await getAll();


    ctx.render(catalogTemplate(boots));
}