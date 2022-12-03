import { deleteById, getById } from "../api/data.js";
import { html, nothing } from "../lib.js";


const detailsTemplate = (album, isOwner, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">Album Details</p>
            <div id="img-wrapper">
                <img src=${album.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
                <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
                <p>
                    <strong>Album name:</strong><span id="details-album">${album.album}</span>
                </p>
                <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
                <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
                <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
            </div>
            <div id="likes">Likes: <span id="likes-count">0</span></div>
            ${isOwner ? html`
            <div id="action-buttons">
                <!-- <a href="" id="like-btn">Like</a> -->
                <a href="/edit/${album._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>
            </div>` : nothing}
        </div>
    </section>`;


export async function showDetails(ctx) {
    const albumId = ctx.params.id;
    const album = await getById(albumId);

    const isLogged = Boolean(ctx.user);
    const isOwner = isLogged && ctx.user._id == album._ownerId;

    ctx.render(detailsTemplate(album, isOwner, onDelete));

    async function onDelete(){
        await deleteById(albumId);
        ctx.page.redirect('/catalog');
    }
}