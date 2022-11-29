import { deleteById, getById } from '../api/data.js';
import { html, nothing } from '../lib.js'


const detailsTemplate = (pet, hasUser, isOwner, onDelete) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: 0$</h4>
            </div>
          ${ hasUser 
            ? html`
            <div class="actionBtn">
                ${ isOwner 
                    ? html `
                <a href="/edit/${pet._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
                : html`
                <a href="#" class="donate">Donate</a>`}
            </div>` 
            : nothing }
        </div>
    </div>
</section>`;


export async function showDetails(ctx) {
    const id = ctx.params.id;
    const pet = await getById(id);

    const hasUser = Boolean(ctx.user);
    const isOwner = hasUser && ctx.user._id == pet._ownerId;

    ctx.render(detailsTemplate(pet, hasUser, isOwner, onDelete));

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this pet?');

       if(choice){
        await deleteById(id);
        ctx.page.redirect('/'); 
       }
    }
}