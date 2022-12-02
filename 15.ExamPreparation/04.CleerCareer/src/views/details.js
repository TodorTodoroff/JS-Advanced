import { deleteById, getById } from "../api/data.js";
import { html, nothing } from "../lib.js";


const detailsTemplate = (offer, isOwner, isLogged, onDelete) => html`
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src=${offer.imageUrl} alt="example1" />
                <p id="details-title">${offer.details}</p>
                <p id="details-category">
                    Category: <span id="categories">${offer.categories}</span>
                </p>
                <p id="details-salary">
                    Salary: <span id="salary-number">${offer.salary}</span>
                </p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <h4>Description</h4>
                        <span>${offer.description}</span>
                    </div>
                    <div id="details-requirements">
                        <h4>Requirements</h4>
                        <span>${offer.requirements}</span>
                    </div>
                </div>
                <p>Applications: <strong id="applications">1</strong></p>
        
                <!--Edit and Delete are only for creator-->
                ${isOwner ? html`
                <div id="action-buttons">
                    <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
                    <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>`
                        : nothing}
        
                    <!--Bonus - Only for logged-in users ( not authors )-->
                    <!-- <a href="" id="apply-btn">Apply</a> -->
                </div>
            </div>
        </section>`;


export async function showDetails(ctx) {
    const offerId = ctx.params.id;
    const offer = await getById(offerId);

    const isLogged = Boolean(ctx.user);
    const isOwner = isLogged && offer._ownerId == ctx.user._id;

    ctx.render(detailsTemplate(offer, isOwner, isLogged, onDelete));

    async function onDelete(){
        await deleteById(offerId);
        ctx.page.redirect('/catalog');
    }

}