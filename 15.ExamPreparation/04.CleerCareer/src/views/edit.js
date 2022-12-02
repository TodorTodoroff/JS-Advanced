import { editById, getById } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const editTeamplate = (offer, onEdit) => html`
        <section id="edit">
            <div class="form" @submit=${onEdit}>
                <h2>Edit Offer</h2>
                <form class="edit-form">
                    <input type="text" name="title" id="job-title" placeholder="Title" value=${offer.title} />
                    <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" value=${offer.imageUrl} />
                    <input type="text" name="category" id="job-category" placeholder="Category" value=${offer.category} />
                    <textarea id="job-description" name="description" placeholder="Description" rows="4"
                        cols="50">${offer.description}</textarea>
                    <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                        cols="50">${offer.requirements}</textarea>
                    <input type="text" name="salary" id="job-salary" placeholder="Salary" value=${offer.salary} />
        
                    <button type="submit">post</button>
                </form>
            </div>
        </section>`;


export async function showEdit(ctx) {
    const offerId = ctx.params.id;
    const offer = await getById(offerId);

    ctx.render(editTeamplate(offer, createSubmitHandler(onEdit)));

    async function onEdit({ title, imageUrl, category, description, requirements, salary }) {
        if ([title, imageUrl, category, description, requirements, salary].some(c => c == '')) {
            return alert('All fields are required!');
        }

        await editById(offerId, { title, imageUrl, category, description, requirements, salary });
        ctx.page.redirect('/details/' + offerId);
    }
}