import { deleteById, getById } from "../api/data.js";
import { getAllLikeCount, getLikeCountUser, likeAlbum } from "../api/like.js";
import { html, nothing } from "../lib.js";


const detailsTemplate = (album, isLogged, isOwner, onDelete, likeCount, onLike, hasLiked) => html`
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
            <div id="likes">Likes: <span id="likes-count">${likeCount}</span></div>
    
            ${isLogged ? html`
            <div id="action-buttons">
                ${isOwner ? html`
                <a href="/edit/${album._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>
                `: nothing}
                ${!isOwner && !hasLiked ?  html`
                <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>`
                : nothing}
            </div>
            `: nothing}
        </div>
    </section>`;


export async function showDetails(ctx) {
    const albumId = ctx.params.id;
    const album = await getById(albumId);

    const isLogged = Boolean(ctx.user);
    const isOwner = isLogged && ctx.user._id == album._ownerId;

    const likeCount = await getAllLikeCount(albumId);
    let likeCountCurrentUser = {};

    if (isLogged) {
        likeCountCurrentUser = await getLikeCountUser(albumId, ctx.user._id);
    }
    const hasLiked = likeCountCurrentUser == 0 ? false : true;

        ctx.render(detailsTemplate(album, isLogged, isOwner, onDelete, likeCount, onLike, hasLiked));

    async function onDelete() {
        await deleteById(albumId);
        ctx.page.redirect('/catalog');
    }

    async function onLike() {
        await likeAlbum({ albumId });
        ctx.page.redirect('/details/' + albumId);
    }
}