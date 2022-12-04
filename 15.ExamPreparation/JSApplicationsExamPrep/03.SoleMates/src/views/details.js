import { deleteById, getById } from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (shoes, isOwner, onDelete) => html`
        <section id="details">
            <div id="details-wrapper">
                <p id="details-title">Shoe Details</p>
                <div id="img-wrapper">
                    <img src=${shoes.imageUrl} alt="example1" />
                </div>
                <div id="info-wrapper">
                    <p>Brand: <span id="details-brand">${shoes.brand}</span></p>
                    <p>
                        Model: <span id="details-model">${shoes.model}</span>
                    </p>
                    <p>Release date: <span id="details-release">${shoes.release}</span></p>
                    <p>Designer: <span id="details-designer">${shoes.designer}</span></p>
                    <p>Value: <span id="details-value">${shoes.value}</span></p>
                </div>
                ${isOwner ? html`
                <div id="action-buttons">
                    <a href="/edit/${shoes._id}" id="edit-btn">Edit</a>
                    <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>
                </div>` : nothing}
            </div>
        </section>`;


export async function showDetails(ctx) {
    const shoeId = ctx.params.id;
    const shoes = await getById(shoeId);

    const isLogged = Boolean(ctx.user);
    const isOwner = isLogged && shoes._ownerId == ctx.user._id;

    ctx.render(detailsTemplate(shoes, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item?');

        if (choice) {
            await deleteById(shoeId);
            ctx.page.redirect('/catalog');
        }

    }
}