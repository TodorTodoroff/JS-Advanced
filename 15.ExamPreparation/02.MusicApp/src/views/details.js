import { deleteById, getById } from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (album, isOwnerAndLogged, onDelete) => html`
        <section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src=${album.imgUrl}>
                </div>
                <div class="albumInfo">
                    <div class="albumText">
        
                        <h1>Name: ${album.name}</h1>
                        <h3>Artist: ${album.artist}</h3>
                        <h4>Genre: ${album.genre}</h4>
                        <h4>Price: $${album.price}</h4>
                        <h4>Date: ${album.releaseDate}</h4>
                        <p>Description: ${album.description}</p>
                    </div>
                    ${isOwnerAndLogged ? html`
                    <!-- Only for registered user and creator of the album-->
                    <div class="actionBtn">
                        <a href="/edit/${album._id}" class="edit">Edit</a>
                        <a href="javascript:void(0)" @click=${onDelete} class="remove">Delete</a>
                    </div>` : nothing }
                </div>
            </div>
        </section>
`;

export async function showDetails(ctx) {
    const albumId = ctx.params.id;
    const album = await getById(albumId);

    const isLogged = Boolean(ctx.user);
    const isOwnerAndLogged = isLogged && album._ownerId == ctx.user._id;

    ctx.render(detailsTemplate(album, isOwnerAndLogged, onDelete));

    async function onDelete(){
        await deleteById(albumId);
        ctx.page.redirect('/catalog');
    }
}