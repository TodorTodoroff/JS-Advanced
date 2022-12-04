import { applyById, deleteById, getAllApplicationCount, getById, getCountCurrentUser } from "../api/data.js";
import { html, nothing } from "../lib.js";


const detailsTemplate = (offer, isOwner, onDelete, isLogged, applyCount, onApply, hasApplied) => html`
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src=${offer.imageUrl} alt="example1" />
                <p id="details-title">${offer.title}</p>
                <p id="details-category">
                    Category: <span id="categories">${offer.category}</span>
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
                <p>Applications: <strong id="applications">${applyCount}</strong></p>
        
                <!--Edit and Delete are only for creator-->
                ${ isLogged ? html`
                <div id="action-buttons">
                    ${isOwner ? html`
                    <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
                    <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>`
                        : nothing}  
                    ${!isOwner && !hasApplied ? html`                  
                    <a href="javascript:void(0)" @click=${onApply} id="apply-btn">Apply</a>`
                    : nothing}
                </div>
                ` : nothing }
            </div>
        </section>`;


export async function showDetails(ctx) {
    const offerId = ctx.params.id;
    const offer = await getById(offerId);
    const applyCount = await getAllApplicationCount(offerId);

    const isLogged = Boolean(ctx.user);
    const isOwner = isLogged && offer._ownerId == ctx.user._id;

    let applyCountCurrentUser = {};
    if(isLogged){
        applyCountCurrentUser = await getCountCurrentUser(offerId, ctx.user._id);
    }
    const hasApplied = applyCountCurrentUser == 0 ? false : true;
    

    ctx.render(detailsTemplate(offer, isOwner, onDelete, isLogged, applyCount, onApply, hasApplied));

    async function onDelete(){
        await deleteById(offerId);
        ctx.page.redirect('/catalog');
    }

    async function onApply(){
        await applyById({offerId});
        ctx.page.redirect('/details/' + offerId);
    }

}